const KARTEN = Array.prototype.concat(
  Array(4).fill('blitz'),
  Array(4).fill('blitzableiter'),
  Array(21).fill('matschen'),
  Array(4).fill('regen'),
  Array(9).fill('stall'),
  Array(8).fill('waschen'),
  Array(4).fill('vernagelt')
)

function mischen (stapel) {
  for (let i = stapel.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[stapel[i], stapel[j]] = [stapel[j], stapel[i]]
  }
  return stapel
}

export function endlosStapel () {
  return KARTEN[Math.floor(Math.random() * KARTEN)]
}

let kartenstapel = mischen(KARTEN)

export function einfacherStapel () {
  if (kartenstapel.length === 0) {
    kartenstapel = mischen(KARTEN)
  }
  return kartenstapel.pop()
}

export function wegwerfen (karte) {
  /* do nothing */
}

export class richtigerStapel {
  constructor () {
    this.stapel = mischen(KARTEN)
    this.ablage = []
  }
  ziehen () {
    if (this.stapel.length === 0) {
      this.stapel = mischen(this.ablage)
      this.ablage = []
    }
    return this.stapel.pop()
  }
  ablegen (karte) {
    this.ablage.push(karte)
  }
}
