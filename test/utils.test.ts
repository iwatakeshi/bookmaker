import numberToFraction from '../src/utils/number-to-fraction'
import {
  isAmericanOdd,
  isDecimalOdd,
  isFractionalOdd,
} from '../src/utils/odd-format'
describe('utils', () => {
  describe('decimalToFraction', () => {
    it('should convert a positive decimal number to a fraction', () => {
      expect(numberToFraction(1.5)).toEqual([3, 2])
    })

    it('should convert a negative decimal number to a fraction', () => {
      expect(numberToFraction(-8.5)).toEqual([-17, 2])
    })

    it('should convert a constant to a fraction', () => {
      expect(numberToFraction(Math.PI)).toEqual([208341, 66317])
    })

    it('should convert modify the precision of the fraction', () => {
      expect(numberToFraction(Math.PI, 1.0e-4)).toEqual([333, 106])
    })
  })

  describe('isAmericanOdds', () => {
    it('should determine whether the input is american odd', () => {
      expect(isAmericanOdd('+200')).toEqual(true)
      expect(isAmericanOdd('-200')).toEqual(true)
      expect(isAmericanOdd(200)).toEqual(true)
      expect(isAmericanOdd(-200)).toEqual(true)

      expect(isAmericanOdd('2.4')).toEqual(false)
      expect(isAmericanOdd(2.4)).toEqual(false)
      expect(isAmericanOdd('3/4')).toEqual(false)
      expect(isAmericanOdd([3, 4])).toEqual(false)
    })
  })

  describe('isDecimalOdd', () => {
    it('should determine whether the input is decimal odd', () => {
      expect(isDecimalOdd('2.4')).toEqual(true)
      expect(isDecimalOdd(2.4)).toEqual(true)

      expect(isDecimalOdd('+200')).toEqual(false)
      expect(isDecimalOdd('-200')).toEqual(false)
      expect(isDecimalOdd(200)).toEqual(false)
      expect(isDecimalOdd(-200)).toEqual(false)
      expect(isDecimalOdd('3/4')).toEqual(false)
      expect(isDecimalOdd([3, 4])).toEqual(false)
    })
  })

  describe('isFractionalOdd', () => {
    it('should determine whether the input is fractional odd', () => {
      expect(isFractionalOdd('3/4')).toEqual(true)
      expect(isFractionalOdd([3, 4])).toEqual(true)

      expect(isFractionalOdd('2.4')).toEqual(false)
      expect(isFractionalOdd(2.4)).toEqual(false)

      expect(isFractionalOdd('+200')).toEqual(false)
      expect(isFractionalOdd('-200')).toEqual(false)
      expect(isFractionalOdd(200)).toEqual(false)
      expect(isFractionalOdd(-200)).toEqual(false)
    })
  })
})
