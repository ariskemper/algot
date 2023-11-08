import type { BitonicSortFn } from './bitonic/bitonic'
import { bitonicSort } from './bitonic/bitonic'
import type { BogoSortFn } from './bogo/bogo'
import { bogoSort } from './bogo/bogo'
import type { BubbleSortFn } from './bubble/bubble'
import { bubbleSort } from './bubble/bubble'
import type { BucketSortFn } from './bucket/bucket'
import { bucketSort } from './bucket/bucket'
import type { CocktailShakerSortFn } from './cocktail-shaker/cocktail-shaker'
import { cocktailShakerSort } from './cocktail-shaker/cocktail-shaker'
import type { ComboSortFn } from './combo/combo'
import { comboSort } from './combo/combo'
import type { CountingSortFn } from './counting/counting'
import { countingSort } from './counting/counting'
import type { CubeSortFn } from './cube/cube'
import { cubeSort } from './cube/cube'
import type { CycleSortFn } from './cycle/cycle'
import { cycleSort } from './cycle/cycle'
import type { GnomeSortFn } from './gnome/gnome'
import { gnomeSort } from './gnome/gnome'
import type { HeapSortFn } from './heap/heap'
import { heapSort } from './heap/heap'
import type { InsertionSortFn } from './insertion/insertion'
import { insertionSort } from './insertion/insertion'
import type { IntroSortFn } from './intro/intro'
import { introSort } from './intro/intro'
import type { MergeSortFn } from './merge/merge'
import { mergeSort } from './merge/merge'
import type { RadixSortFn } from './radix/radix'
import { radixSort } from './radix/radix'
import type { RandomQuickSortFn } from './random-quick/random-quick'
import { randomQuickSort } from './random-quick/random-quick'
import type { SelectionSortFn } from './selection/selection'
import { selectionSort } from './selection/selection'
import type { ShellSortFn } from './shell/shell'
import { shellSort } from './shell/shell'
import type { TreeSortFn } from './tree/tree'
import { treeSort } from './tree/tree'

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
  | BitonicSortFn
  | ComboSortFn

export type IntegerSortFn = CountingSortFn | RadixSortFn | BucketSortFn | CubeSortFn

export {
  bitonicSort,
  bogoSort,
  bubbleSort,
  bucketSort,
  cocktailShakerSort,
  comboSort,
  countingSort,
  cubeSort,
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
