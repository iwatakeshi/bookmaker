export default function numberToFraction(
  n: number,
  precision = 1.0e-10
): [numerator: number, denominator: number] {
  let numerator = 0,
    denominator = 1
  const mul = n >= 0 ? 1 : -1
  const x = Math.abs(n)

  // How many digits is the algorithm going to consider
  const limit = precision
  let h1 = 1,
    h2 = 0,
    k1 = 0,
    k2 = 1
  let y = Math.abs(n)

  do {
    const a = Math.floor(y)
    let aux = h1
    h1 = a * h1 + h2
    h2 = aux
    aux = k1
    k1 = a * k1 + k2
    k2 = aux
    y = 1 / (y - a)
  } while (Math.abs(x - h1 / k1) > x * limit)

  // Assigning the computed values
  numerator = mul * Math.trunc(h1)
  denominator = Math.trunc(k1)
  return [numerator, denominator]
}
