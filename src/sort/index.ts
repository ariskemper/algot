import { bogoSort, BogoSortFn } from './bogo/bogo'
import { bubbleSort, BubbleSortFn } from './bubble/bubble'
import { bucketSort, BucketSortFn } from './bucket/bucket'
import { cocktailShakerSort, CocktailShakerSortFn } from './cocktail-shaker/cocktail-shaker'
import { countingSort, CountingSortFn } from './counting/counting'
import { cycleSort, CycleSortFn } from './cycle/cycle'
import { gnomeSort, GnomeSortFn } from './gnome/gnome'
import { heapSort, HeapSortFn } from './heap/heap'
import { insertionSort, InsertionSortFn } from './insertion/insertion'
import { introSort, IntroSortFn } from './intro/intro'
import { mergeSort, MergeSortFn } from './merge/merge'
import { radixSort, RadixSortFn } from './radix/radix'
import { randomQuickSort, RandomQuickSortFn } from './random-quick/random-quick'
import { selectionSort, SelectionSortFn } from './selection/selection'
import { shellSort, ShellSortFn } from './shell/shell'
import { treeSort, TreeSortFn } from './tree/tree'

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
  | CycleSortFn
  | IntroSortFn

export type IntegerSortFn = CountingSortFn | RadixSortFn | BucketSortFn

export {
  bogoSort,
  bubbleSort,
  bucketSort,
  cocktailShakerSort,
  countingSort,
  cycleSort,
  gnomeSort,
  heapSort,
  insertionSort,
  introSort,
  mergeSort,
  radixSort,
  randomQuickSort,
  selectionSort,
  shellSort,
  treeSort
}
