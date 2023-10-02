import { testSort, testSortRandomIntegers } from '../../utils/test-sort'
import { introSort } from './intro'

testSort(introSort)
testSortRandomIntegers(introSort, 100)
