import { AmericanOdds, DecimalOdds, FractionalOdds } from '../types'

/**
 * Determines whether the input is an American odd
 * @param odds
 * @returns
 */
export function isAmericanOdd(
  odds: AmericanOdds | DecimalOdds | FractionalOdds
): boolean {
  if (typeof odds === 'object') return false
  if (typeof odds === 'string') return odds.includes('+') || odds.includes('-')
  return Number.isInteger(odds)
}

/**
 * Determines whether the input is an Decimal odd
 * @param odds
 * @returns
 */
export function isDecimalOdd(
  odds: AmericanOdds | DecimalOdds | FractionalOdds
): boolean {
  if (typeof odds === 'object') return false
  if (typeof odds == 'string') return odds.includes('.')
  return !Number.isInteger(odds)
}

/**
 * Determines whether the input is a Fractoinal odd
 * @param odds
 * @returns
 */
export function isFractionalOdd(
  odds: AmericanOdds | DecimalOdds | FractionalOdds
): boolean {
  if (typeof odds === 'object' && Array.isArray(odds)) return true
  return !isAmericanOdd(odds) && !isDecimalOdd(odds)
}
