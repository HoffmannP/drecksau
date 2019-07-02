const KARTEN = Array.prototype.concat(
  Array(4).fill('blitz'),
  Array(4).fill('blitzableiter'),
  Array(21).fill('matschen'),
  Array(4).fill('regen'),
  Array(9).fill('stall'),
  Array(8).fill('waschen'),
  Array(4).fill('vernagelt')
)
let kartenstapel = mischen(KARTEN)

function mischen (stapel) {
  for (let i = stapel.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[stapel[i], stapel[j]] = [stapel[j], stapel[i]]
  }
  return stapel
}

export default function () {
  return kartenstapel.pop()
}
