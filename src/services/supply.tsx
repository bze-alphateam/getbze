import BigNumber from "bignumber.js";
import { getCirculatingSupply, getInflation, getStakingPool, getTotalSupply } from "./client"
import { getFromCache, setInCache } from "./cache";

const totalSupplyKey = 'supply:total';
const circulatingSupplyKey = 'supply:circulating';
const inflationKey = 'supply:inflation';
const bondedKey = 'supply:bonded';
const cacheTtl = 15 * 60; //15 minutes

export const getBzeTotalSupply = async (): Promise<BigNumber> => {
  const cached = getFromCache(totalSupplyKey);
  if (cached) {
    return new BigNumber(cached)
  }

  const result = await getTotalSupply();
  if (!result) {
    return new BigNumber(0);
  }
  setInCache(totalSupplyKey, result, cacheTtl);

  return new BigNumber(result);
}

export const getBzeCirculatingSupply = async (): Promise<BigNumber> => {
  const cached = getFromCache(circulatingSupplyKey);
  if (cached) {
    return new BigNumber(cached)
  }

  const result = await getCirculatingSupply();
  if (!result) {
    return new BigNumber(0);
  }

  setInCache(circulatingSupplyKey, result, cacheTtl);

  return new BigNumber(result);
}

export const getBzeInflation = async (): Promise<BigNumber> => {
  const cached = getFromCache(inflationKey);
  if (cached) {
    const decoded = JSON.parse(cached);

    return new BigNumber(decoded.inflation);
  }

  const result = await getInflation();
  if (!result) {
    return new BigNumber(0);
  }

  setInCache(inflationKey, JSON.stringify(result), cacheTtl);

  return new BigNumber(result.inflation);
}

export const getBzeBondedAmount = async (): Promise<BigNumber> => {
  const cached = getFromCache(bondedKey);
  if (cached) {
    const decoded = JSON.parse(cached);

    return new BigNumber(decoded.bonded_tokens).dividedBy(1e6);
  }

  const result = await getStakingPool();
  if (!result) {
    return new BigNumber(0);
  }

  setInCache(bondedKey, JSON.stringify(result), cacheTtl);

  return new BigNumber(result.bonded_tokens).dividedBy(1e6);
}
