
interface InflationResponse {
  inflation: string;
}

interface StakingPoolResponse {
  bonded_tokens: string;
  not_bonded_tokens: string;
}

const inflationUrl = () => `${getHost()}/cosmos/mint/v1beta1/inflation`;
const stakingPoolUrl = () => `${getHost()}/cosmos/staking/v1beta1/pool`;

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

