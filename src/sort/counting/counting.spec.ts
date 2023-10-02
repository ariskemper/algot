import { testSortRandomIntegers, testSortSingleInteger } from '../../utils/test-sort'
import { countingSort } from './counting'

testSortRandomIntegers(countingSort)
testSortSingleInteger(countingSort)
