import { testSortNegativeIntegers, testSortRandomIntegers, testSortSingleInteger } from '../../utils/test-sort'
import { bucketSort } from './bucket'

testSortRandomIntegers(bucketSort)
testSortSingleInteger(bucketSort)
testSortNegativeIntegers(bucketSort)
