import { BubbleSortFn, bubbleSort } from './bubble/bubble'
import { HeapSortFn, heapSort} from './heap/heap'
import { InsertionSortFn, insertionSort } from './insertion/insertion'
import { MergeSortFn, mergeSort } from './merge/merge'
import { SelectionSortFn, selectionSort } from './selection/selection'

export type SortFn = BubbleSortFn |
  HeapSortFn |
  InsertionSortFn |
  MergeSortFn |
  SelectionSortFn

export {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  selectionSort
}
