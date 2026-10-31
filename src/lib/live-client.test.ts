import { describe, expect, it, vi } from 'vitest';

import { createLiveClient, type FetchFn, type LiveClient, withSharedRequests } from './live-client';

const json = (body: unknown, status = 200) => Promise.resolve(new Response(JSON.stringify(body), { status }));
const config = { restHost: 'https://rest.test', aggregatorHost: 'https://agg.test/api' };

describe('createLiveClient', () => {
    it('reads each value from its chain route', async () => {
        const fetchFn = vi.fn<FetchFn>((url) => {
            const routes: Record<string, unknown> = {
                'https://rest.test/cosmos/bank/v1beta1/supply/by_denom?denom=ubze': { amount: { denom: 'ubze', amount: '42' } },
                'https://rest.test/bze/tradebin/params': { params: { minNativeLiquidityForModuleSwap: '100000000000' } },
                'https://rest.test/bze/epochs/current_epoch?identifier=hour': { current_epoch: '20013' },
                'https://agg.test/api/articles/medium': [{ title: 't' }],
            };

            return json(routes[url]);
        });
        const client = createLiveClient(config, fetchFn);

        expect(await client.totalSupply()).toBe('42');
        expect((await client.tradebinParams()).minNativeLiquidityForModuleSwap).toBe('100000000000');
        expect(await client.currentEpoch('hour')).toBe('20013');
        expect(await client.articles()).toEqual([{ title: 't' }]);
    });

    it('rejects on a non-200 answer', async () => {
        const client = createLiveClient(config, () => json({}, 502));
        await expect(client.inflation()).rejects.toThrow('HTTP 502');
    });
});

describe('withSharedRequests', () => {
    it('sends one request for everyone, and asks again after a failure', async () => {
        const inflation = vi.fn<LiveClient['inflation']>()
            .mockRejectedValueOnce(new Error('down'))
            .mockResolvedValue('0.05');
        const shared = withSharedRequests({ inflation } as unknown as LiveClient);

        await expect(Promise.all([shared.inflation(), shared.inflation()])).rejects.toThrow('down');
        expect(inflation).toHaveBeenCalledTimes(1);

        expect(await Promise.all([shared.inflation(), shared.inflation()])).toEqual(['0.05', '0.05']);
        expect(inflation).toHaveBeenCalledTimes(2);
    });
});
