
/**
 * Time Complexity
 * The time complexity of the counting sort algorithm is O(n+k), where:
 * - n is the number of elements in the input array
 * - k is the range of input values (difference between the maximum and minimum
 * values)
 *
 * Space Complexity
 * The space complexity of the counting sort algorithm is O(k), as it requires
 * additional space to store the count of each value in the range.
 * Note that counting sort is efficient when k is not significantly larger than
 * n. If k is much larger than n, the counting sort can be less efficient
 * compared to other sorting algorithms like quicksort or mergesort
 * which have a time complexity of O(n log n).
 *
 * @param arr array of integers, which should be sorted
 * @returns sorted array
 */
export function countingSort(arr: number[]): number[] {
  if (arr.length < 2) return arr

  const { min, max} = getMinMaxValue(arr)

  const countArr = new Array(max - min + 1).fill(0)

  arr.forEach(value => {
    countArr[value - min]++
  })

  return reconstruct(countArr, min)
}

function getMinMaxValue(arr: number[]): { min: number, max: number } {
  let min = arr[0]
  let max = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
    if (arr[i] > max) max = arr[i]
  }

  return { min, max }
}

function reconstruct(counts: number[], min: number): number[] {
  const sortedArr: number[] = []

  counts.forEach((elem, index) => {
    while (elem > 0) {
      sortedArr.push(index + min)
      elem--
    }
  })

  return sortedArr
}

export type CountingSortFn = typeof countingSort
