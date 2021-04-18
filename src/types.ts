export type AmericanOdds = `${'+' | '-'}${number}` | `${'+' | '-'} ${number}` | number
export type DecimalOdds = number | `${number}`;
export type FractionalOdds = `${number}/${number}` | `${number} / ${number}` | [numerator: number, denominator: number]
