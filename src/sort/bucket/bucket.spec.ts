import {
  testSortIntegers,
  testSortNegativeIntegers,
  testSortSingleInteger
} from '../../utils/test-sort'
import { bucketSort } from './bucket'

testSortIntegers(bucketSort)
testSortSingleInteger(bucketSort)
testSortNegativeIntegers(bucketSort)
