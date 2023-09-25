import { bucketSort, BucketSortFn } from './bucket/bucket'
import { bogoSort, BogoSortFn } from './bogo/bogo'
import { BubbleSortFn, bubbleSort } from './bubble/bubble'
import { countingSort, CountingSortFn } from './counting/counting'
import { HeapSortFn, heapSort } from './heap/heap'
import { InsertionSortFn, insertionSort } from './insertion/insertion'
import { MergeSortFn, mergeSort } from './merge/merge'
import { randomQuickSort, RandomQuickSortFn } from './random-quick/random-quick'
import { SelectionSortFn, selectionSort } from './selection/selection'
import { ShellSortFn, shellSort } from './shell/shell'

export type SortFn =
  | BubbleSortFn
  | HeapSortFn
  | InsertionSortFn
  | MergeSortFn
  | SelectionSortFn
  | RandomQuickSortFn
  | ShellSortFn
  | BogoSortFn
  | BucketSortFn

export type IntegerSortFn = CountingSortFn

export {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  selectionSort,
  countingSort,
  randomQuickSort,
  shellSort,
  bogoSort,
  bucketSort
}
