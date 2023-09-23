import {
  testSortIntegers,
  testSortNegativeIntegers,
  testSortSingleInteger
} from '../../utils/test-sort'
import { radixSort } from './radix'

testSortIntegers(radixSort)
testSortSingleInteger(radixSort)
testSortNegativeIntegers(radixSort)
