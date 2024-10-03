import {getFromCache, setInCache} from "../cache";

interface InflationResponse {
  inflation: string;
}

interface StakingPoolResponse {
  bonded_tokens: string;
  not_bonded_tokens: string;
}

export interface RaffleSDKType {
  pot: string;
  ratio: string;
  denom: string;
}

const RAFFLE_CACHE = 'bze:raffle';
const RAFFLE_TTL = 60;

const inflationUrl = () => `${getHost()}/cosmos/mint/v1beta1/inflation`;
const stakingPoolUrl = () => `${getHost()}/cosmos/staking/v1beta1/pool`;

const getRafflesUrl = () => `${getHost()}/bze/burner/v1/raffles`;

const getHost = (): string => {
  return process.env.REACT_APP_BLOCKCHAIN_REST_API_HOST ?? "";
}

export const getInflation = async (): Promise<InflationResponse|null> => {
  try {
    const resp = await fetch(inflationUrl());
    if (resp.status !== 200) {
      return null;
    }

    return resp.json();
  } catch (e) {
    console.log("error on getInflation: ", e);

    return null;
  }
}

export const getStakingPool = async (): Promise<StakingPoolResponse|null> => {
  try {
    const resp = await fetch(stakingPoolUrl());
    if (resp.status !== 200) {
      return null;
    }

    const jsonResponse = await resp.json();

    return jsonResponse.pool;

  } catch (e) {
    console.log("error on getStakingPool: ", e);

    return null;
  }
}

export async function getBZERaffle(): Promise<RaffleSDKType|null> {
  try {
    const cached = getFromCache(RAFFLE_CACHE);
    if (cached) {
      if (cached === "") {
        return null;
      }

      const decoded = JSON.parse(cached);

      return decoded ?? null;
    }

    const resp = await fetch(getRafflesUrl());
    if (resp.status !== 200) {
      return null;
    }

    const jsonResponse = await resp.json();

    const raffle = jsonResponse.list.find((r: RaffleSDKType) => r.denom === 'ubze');
    if (!raffle) {
      setInCache(RAFFLE_CACHE, "", RAFFLE_TTL);
      return null;
    }

    setInCache(RAFFLE_CACHE, JSON.stringify(raffle), RAFFLE_TTL);

    return raffle;
  } catch (e) {
    console.log("error on getBZERaffle: ", e);

    return null;
  }
}

