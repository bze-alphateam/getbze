import BigNumber from "bignumber.js";

export const bigNumberToPrettyString = (number: BigNumber): string => {
  const million = new BigNumber(1e6);
  const formattedValue = number.dividedBy(million).toFixed(2); // Adjust the decimal places as needed

  return `${formattedValue}M`;
}

export function bigNumberToIntlFormat(amount: BigNumber): string {
  return Intl.NumberFormat('en', { notation: 'standard' }).format(amount.toNumber());
}
