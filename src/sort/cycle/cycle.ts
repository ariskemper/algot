import { compare } from '../../utils'

export function cycleSort<T extends number | string>(arr: T[]): T[] {
  const len = arr.length

  if (len === 0) return arr

  for (let cur = 0; cur <= len - 1; cur++) {
    let item = arr[cur]
    let pos = cur
    for (let i = cur + 1; i < len; i++) {
      if (compare(item, arr[i]) > 0) pos++
    }

    if (pos === cur) continue

    while (item === arr[pos]) {
      pos++
    }
    ;[arr[pos], item] = [item, arr[pos]]

    while (pos !== cur) {
      pos = cur

      for (let j = cur + 1; j < len; j++) {
        if (compare(item, arr[j]) > 0) pos++
      }

      while (item === arr[pos]) {
        pos++
      }
      ;[arr[pos], item] = [item, arr[pos]]
    }
  }

  return arr
}

export type CycleSortFn = typeof cycleSort
