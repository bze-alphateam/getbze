import BigNumber from "bignumber.js";

/**
 * Calculates the APR (Annual Percentage Rate) in percent.
 * @param {BigNumber} tSupply - The total supply of tokens.
 * @param {BigNumber} bondedTokens - The amount of bonded tokens.
 * @param {BigNumber} inflation - The inflation rate.
 * @returns {string} - The APR in percent, formatted as a string with two decimal places.
 */
export const calculateAPR = (tSupply: BigNumber, bondedTokens: BigNumber, inflation: BigNumber): string => {
  // APR = (inflation * tSupply / bondedTokens) * 100
  const apr = inflation.multipliedBy(tSupply).dividedBy(bondedTokens).multipliedBy(100);
  
  return apr.toFixed(2); // Format to 2 decimal places
}
