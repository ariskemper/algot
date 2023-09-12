import { testSortIntegers, testSortSingleInteger } from '../../utils/test-sort'
import { countingSort } from './counting'

testSortIntegers(countingSort)
testSortSingleInteger(countingSort)
