import { AmericanOdds, DecimalOdds, FractionalOdds } from './types'
import numberToFraction from './utils/number-to-fraction'
/**
 * Converts American odds to Decimal odds.
 * @param odds
 */
export function americanToDecimal(odds: AmericanOdds): number {
  const _odds = typeof odds === 'string' ? parseInt(odds) : odds
  if (_odds >= 0) return _odds / 100 + 1

  return parseFloat((1 - 100 / _odds).toFixed(2))
}
/**
 * Converts American odds to Decimal odds.
 * @alias americanToDecimal
 */
export const atd = americanToDecimal

/**
 * Converts American odds to Fractional odds.
 * @param odds
 */
export function americanToFraction(
  odds: AmericanOdds
): [numerator: number, denominator: number] {
  const _odds = typeof odds === 'string' ? parseInt(odds) : odds
  if (_odds > 0) return numberToFraction(_odds / 100)
  return numberToFraction(100 / Math.abs(_odds))
}

/**
 * Converts American odds to Fractional odds.
 * @alias americanToFraction
 */
export const atf = americanToFraction

/**
 * Converts Decimal odds to American odds.
 * @param odds
 */
export function decimalToAmerican(odds: DecimalOdds): number {
  const _odds = typeof odds === 'string' ? parseFloat(odds) : odds
  return parseInt(
    _odds < 2.0
      ? (-100 / (_odds - 1)).toPrecision(5)
      : ((_odds - 1) * 100).toPrecision(5)
  )
}

/**
 * Converts Decimal odds to American odds.
 * @alias decimalToAmerican
 */
export const dta = decimalToAmerican

/**
 * Converts Decimal odds to Fractonal odds.
 * @param odds
 */
export function decimalToFraction(
  odds: DecimalOdds
): [numerator: number, denominator: number] {
  const _odds = typeof odds === 'string' ? parseFloat(odds) : odds

  return numberToFraction(_odds - 1)
}

/**
 * Converts Decimal odds to Fractonal odds.
 * @alias decimalToFraction
 */
export const dtf = decimalToFraction

/**
 * Converts Fractional odds to American odds.
 * @param odds
 */
export function fractionToAmerican(odds: FractionalOdds): number {
  const [numerator, denominator] = Array.isArray(odds) ? odds : odds.split('/')
  const n = typeof numerator === 'string' ? parseInt(numerator) : numerator
  const d =
    typeof denominator === 'string' ? parseInt(denominator) : denominator
  if (n > d) return (n / d) * 100
  return -100 / (n / d)
}

/**
 * Converts Fractional odds to American odds.
 * @alias fractionToAmerican
 */
export const fta = fractionToAmerican

/**
 * Converts Fractional odds to Decimal odds.
 * @param odds
 */
export function fractionToDecimal(odds: FractionalOdds): number {
  const [numerator, denominator] = Array.isArray(odds) ? odds : odds.split('/')
  const n = typeof numerator === 'string' ? parseInt(numerator) : numerator
  const d =
    typeof denominator === 'string' ? parseInt(denominator) : denominator
  return n / d + 1
}

/**
 *  Converts Fractional odds to Decimal odds.
 * @alias fractionToDecimal
 */
export const ftd = fractionToDecimal

/**
 * Converts American odds to percentage (implied probability).
 * @param odds
 */
export function americanToPercent(odds: AmericanOdds) {
  return parseFloat((1 / americanToDecimal(odds)).toFixed(3))
}

/**
 * Converts American odds to percentage (implied probability).
 * @alias americanToPercent
 */
export const atp = americanToPercent

/**
 * Converts Decimal odds to percentage (implied probability).
 * @param odds
 */
export function decimalToPercent(odds: DecimalOdds) {
  const american = decimalToAmerican(odds)
  return americanToPercent(american)
}

/**
 * Converts Decimal odds to percentage (implied probability).
 * @alias decimalToPercentage
 */
export const dtp = decimalToPercent

/**
 * Converts Fractional odds to percentage (implied probability).
 * @param odds
 */
export function fractionToPercent(odds: FractionalOdds) {
  const american = fractionToAmerican(odds)
  return americanToPercent(american)
}

/**
 * Converts Fractional odds to percentage (implied probability).
 * @alias fractionToPercent
 */
export const ftp = fractionToPercent
