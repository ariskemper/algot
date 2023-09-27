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
import { radixSort, RadixSortFn } from './radix/radix'
import { gnomeSort, GnomeSortFn } from './gnome/gnome'
import { treeSort, TreeSortFn } from './tree/tree'
import {
  cocktailShakerSort,
  CocktailShakerSortFn
} from './cocktail-shaker/cocktail-shaker'

export type SortFn =
  | BubbleSortFn
  | HeapSortFn
  | InsertionSortFn
  | MergeSortFn
  | SelectionSortFn
  | RandomQuickSortFn
  | ShellSortFn
  | GnomeSortFn
  | TreeSortFn
  | BogoSortFn
  | CocktailShakerSortFn

export type IntegerSortFn = CountingSortFn | RadixSortFn | BucketSortFn

export {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  selectionSort,
  countingSort,
  randomQuickSort,
  shellSort,
  gnomeSort,
  treeSort,
  radixSort,
  bogoSort,
  bucketSort,
  cocktailShakerSort
}
