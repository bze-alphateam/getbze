// The live data the site shows, behind one interface so components never build their
// own fetchers: the real client is created once in the layout, tests pass a mock.

export interface ArticleData {
    title: string;
    url: string;
    picture_url: string;
    description: string;
    publish_date: string;
    author_name: string;
}

export interface RaffleData {
    pot: string;
    duration: string;
    chances: string;
    ratio: string;
    end_at: string;
    winners: string;
    ticket_price: string;
    denom: string;
    total_won: string;
}

/** Raw chain and feed responses; every method rejects when the request fails. */
export interface LiveClient {
    /** Bank supply of ubze. */
    totalSupply(): Promise<string>;
    /** Staking pool: bonded and not bonded ubze. */
    stakingPool(): Promise<{ bonded_tokens: string; not_bonded_tokens: string }>;
    /** Community pool coins, decimal amounts. */
    communityPool(): Promise<{ denom: string; amount: string }[]>;
    /** Mint inflation as a decimal fraction ("0.05"). */
    inflation(): Promise<string>;
    /** Staking params; unbonding_time is a duration string ("1814400s"). */
    stakingParams(): Promise<{ unbonding_time: string }>;
    /** Tradebin params; only the fee-coin minimum is read. */
    tradebinParams(): Promise<{ minNativeLiquidityForModuleSwap: string }>;
    /** Every running raffle. */
    raffles(): Promise<RaffleData[]>;
    /** The current epoch of the given identifier ("hour"). */
    currentEpoch(identifier: string): Promise<string>;
    /** Latest Medium articles, newest first. */
    articles(): Promise<ArticleData[]>;
}

export type FetchFn = (url: string) => Promise<Response>;

export interface LiveClientConfig {
    restHost: string;
    aggregatorHost: string;
}

async function getJson<T>(fetchFn: FetchFn, url: string): Promise<T> {
    const resp = await fetchFn(url);
    if (!resp.ok) {
        throw new Error(`${url}: HTTP ${resp.status}`);
    }

    return (await resp.json()) as T;
}

export function createLiveClient(config: LiveClientConfig, fetchFn: FetchFn): LiveClient {
    const rest = (path: string) => `${config.restHost}${path}`;

    return {
        totalSupply: async () =>
            (await getJson<{ amount: { amount: string } }>(fetchFn, rest('/cosmos/bank/v1beta1/supply/by_denom?denom=ubze'))).amount.amount,
        stakingPool: async () =>
            (await getJson<{ pool: { bonded_tokens: string; not_bonded_tokens: string } }>(fetchFn, rest('/cosmos/staking/v1beta1/pool'))).pool,
        communityPool: async () =>
            (await getJson<{ pool: { denom: string; amount: string }[] }>(fetchFn, rest('/cosmos/distribution/v1beta1/community_pool'))).pool,
        inflation: async () =>
            (await getJson<{ inflation: string }>(fetchFn, rest('/cosmos/mint/v1beta1/inflation'))).inflation,
        stakingParams: async () =>
            (await getJson<{ params: { unbonding_time: string } }>(fetchFn, rest('/cosmos/staking/v1beta1/params'))).params,
        tradebinParams: async () =>
            (await getJson<{ params: { minNativeLiquidityForModuleSwap: string } }>(fetchFn, rest('/bze/tradebin/params'))).params,
        raffles: async () =>
            (await getJson<{ list: RaffleData[] }>(fetchFn, rest('/bze/burner/raffles'))).list,
        currentEpoch: async (identifier) =>
            (await getJson<{ current_epoch: string }>(fetchFn, rest(`/bze/epochs/current_epoch?identifier=${encodeURIComponent(identifier)}`))).current_epoch,
        // The Medium feed still comes from the aggregator: no other source serves it yet.
        articles: () => getJson<ArticleData[]>(fetchFn, `${config.aggregatorHost}/articles/medium`),
    };
}

/**
 * Shares one request per method (and argument) between every component on the page.
 * A failed request is forgotten, so "Try again" asks the chain again.
 */
export function withSharedRequests(client: LiveClient): LiveClient {
    const inflight = new Map<string, Promise<unknown>>();
    const share = <T>(key: string, load: () => Promise<T>): Promise<T> => {
        const existing = inflight.get(key);
        if (existing) {
            return existing as Promise<T>;
        }
        const request = load().catch((err: unknown) => {
            inflight.delete(key);
            throw err;
        });
        inflight.set(key, request);

        return request;
    };

    return {
        totalSupply: () => share('totalSupply', client.totalSupply),
        stakingPool: () => share('stakingPool', client.stakingPool),
        communityPool: () => share('communityPool', client.communityPool),
        inflation: () => share('inflation', client.inflation),
        stakingParams: () => share('stakingParams', client.stakingParams),
        tradebinParams: () => share('tradebinParams', client.tradebinParams),
        raffles: () => share('raffles', client.raffles),
        currentEpoch: (identifier) => share(`currentEpoch:${identifier}`, () => client.currentEpoch(identifier)),
        articles: () => share('articles', client.articles),
    };
}
