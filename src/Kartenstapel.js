const KARTENSTAPEL = Array.prototype.concat(
  Array(1).fill('blitz'),
  Array(1).fill('blitzableiter'),
  Array(3).fill('matschen'),
  Array(1).fill('regen'),
  Array(2).fill('scheune'),
  Array(2).fill('waschen'),
  Array(1).fill('vernagelt')
)

export default function () {
  let position = Math.floor(Math.random() * KARTENSTAPEL.length)
  return KARTENSTAPEL[position]
}
