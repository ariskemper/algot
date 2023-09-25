import { insertionSort } from '../index'

/**
 * Bucket Sort distributes the elements into a number of buckets,
 * then sorts the buckets individually. Here it is used insertion sort algorithm
 * to sort the buckets.
 *
 * The time complexity of the Bucket Sort algorithm depends on various factors,
 * including the distribution of the input data, the number of buckets,
 * and the sorting algorithm used to sort individual buckets.
 *
 *  Time Complexity
 * - Best Case: O(n+k) - If the input is uniformly distributed such that each
 * bucket contains approximately the same number of keys,
 * and if the keys are distributed uniformly in the buckets, the algorithm runs
 * linearly, where n is the number of elements and k is the number of buckets.
 *
 * - Average Case: O(n) - In most real-world scenarios, when the elements are
 * distributed fairly uniformly and when the number of buckets k is O(n),
 * the time complexity is approximately linear:O(n+n^2/k+k). If k = O(n), this
 * becomes O(n).
 *
 * - Worst Case: O(n^2) - If all the input elements are placed in a single bucket,
 * and if we use a comparison sort (like insertion sort) for
 * the individual buckets, the time complexity will be O(n^2). This is because
 * all the elements are in one bucket, and we have to sort n elements using
 * O(n^2) sorting algorithm. This worst case occurs when the elements are
 * not uniformly distributed.
 *
 * @param arr unsorted array of numbers
 * @param bucketSize number, set how many elements should bucket contain
 * @returns sorted array of numbers
 */
export function bucketSort(arr: number[], bucketSize: number = 5): number[] {
  if (arr.length <= 1) return arr
  return sortBuckets(createBuckets(arr, bucketSize))
}

function createBuckets(arr: number[], bucketSize: number): number[][] {
  const minVal = Math.min(...arr)
  const maxVal = Math.max(...arr)

  const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1
  const allBuckets: number[][] = Array.from({ length: bucketCount }, () => [])

  arr.forEach((currentVal) => {
    allBuckets[Math.floor((currentVal - minVal) / bucketSize)].push(currentVal)
  })

  return allBuckets
}

function sortBuckets(buckets: number[][]): number[] {
  let outputArr: number[] = []
  buckets.forEach((bucket) => {
    outputArr = outputArr.concat(insertionSort(bucket))
  })

  return outputArr
}

export type BucketSortFn = typeof bucketSort
