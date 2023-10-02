import { testSortNegativeIntegers, testSortRandomIntegers, testSortSingleInteger } from '../../utils/test-sort'
import { radixSort } from './radix'

testSortRandomIntegers(radixSort)
testSortSingleInteger(radixSort)
testSortNegativeIntegers(radixSort)
