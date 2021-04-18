import {
  americanToDecimal,
  americanToFraction,
  americanToPercent,
  decimalToAmerican,
  decimalToFraction,
  decimalToPercent,
  fractionToAmerican,
  fractionToDecimal,
  fractionToPercent,
} from '../src/convert'

describe('convert', () => {
  describe('convertAmericanToDecimal', () => {
    it('should convert positive american odd to decimal odd', () => {
      expect(americanToDecimal('+235')).toEqual(3.35)
      expect(americanToDecimal(235)).toEqual(3.35)
    })

    it('should convert negative american odd to decimal odd', () => {
      expect(americanToDecimal('-150')).toEqual(1.67)
      expect(americanToDecimal(-150)).toEqual(1.67)
    })
  })

  describe('convertAmericanToFraction', () => {
    it('should convert positive american odd to fraction', () => {
      expect(americanToFraction('+180')).toStrictEqual([9, 5])
      expect(americanToFraction(180)).toStrictEqual([9, 5])
    })

    it('should convert negative american odd to fraction', () => {
      expect(americanToFraction('-200')).toStrictEqual([1, 2])
      expect(americanToFraction(-200)).toStrictEqual([1, 2])
    })
  })

  describe('convertAmericanToPercent', () => {
    it('should convert positive american odd to percentage', () => {
      expect(americanToPercent('+225')).toEqual(0.308)
      expect(americanToPercent(225)).toEqual(0.308)
    })

    it('should convert negative american odd to percentage', () => {
      expect(americanToPercent('-200')).toEqual(0.667)
      expect(americanToPercent(-200)).toEqual(0.667)
    })
  })

  describe('convertDecimalToAmerican', () => {
    it('should convert decimal odd to positive american odd', () => {
      expect(decimalToAmerican('2.50')).toEqual(150)
      expect(decimalToAmerican(2.5)).toEqual(150)
    })
    it('should convert decimal odd to a negative american odd', () => {
      expect(decimalToAmerican('1.67')).toEqual(-149)
      expect(decimalToAmerican(1.67)).toEqual(-149)
    })
  })

  describe('convertDecimalToFraction', () => {
    it('should convert decimal to fraction', () => {
      expect(decimalToFraction('1.2')).toStrictEqual([1, 5])
      expect(decimalToFraction(1.2)).toStrictEqual([1, 5])

      expect(decimalToFraction('3.25')).toStrictEqual([9, 4])
      expect(decimalToFraction(3.25)).toStrictEqual([9, 4])
    })
  })

  describe('convertDecimalToPercent', () => {
    it('should convert decimal odd to positive american odd', () => {
      expect(decimalToPercent('2.50')).toEqual(0.4)
      expect(decimalToPercent(2.5)).toEqual(0.4)
    })
    it('should convert decimal odd to a negative american odd', () => {
      expect(decimalToPercent('1.67')).toEqual(0.599)
      expect(decimalToPercent(1.67)).toEqual(0.599)
    })
  })

  describe('convertFractionToAmerican', () => {
    it('should convert fraction to positive american odd', () => {
      expect(fractionToAmerican('9/4')).toEqual(225)
      expect(fractionToAmerican('9 / 4')).toEqual(225)
      expect(fractionToAmerican([9, 4])).toEqual(225)
    })

    it('should convert fraction to negative american odd', () => {
      expect(fractionToAmerican('1/2')).toEqual(-200)
      expect(fractionToAmerican('1 / 2')).toEqual(-200)
      expect(fractionToAmerican([1, 2])).toEqual(-200)
    })
  })

  describe('convertFractionToDecimal', () => {
    it('should convert fraction to decimal', () => {
      expect(fractionToDecimal('1/2')).toEqual(1.5)
      expect(fractionToDecimal('1 / 2')).toEqual(1.5)
      expect(fractionToDecimal([1, 2])).toEqual(1.5)

      expect(fractionToDecimal('9/4')).toEqual(3.25)
      expect(fractionToDecimal('9/4')).toEqual(3.25)
      expect(fractionToDecimal([9, 4])).toEqual(3.25)
    })
  })

  describe('convertFractionToPercent', () => {
    it('should convert fraction to decimal', () => {
      expect(fractionToPercent('1/2')).toEqual(0.667)
      expect(fractionToPercent('1 / 2')).toEqual(0.667)
      expect(fractionToPercent([1, 2])).toEqual(0.667)

      expect(fractionToPercent('9/4')).toEqual(0.308)
      expect(fractionToPercent('9/4')).toEqual(0.308)
      expect(fractionToPercent([9, 4])).toEqual(0.308)
    })
  })
})
