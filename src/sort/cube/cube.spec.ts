import { testSortNegativeIntegers, testSortRandomIntegers, testSortSingleInteger } from '../../utils/test-sort'
import { cubeSort } from './cube'

testSortRandomIntegers(cubeSort, 16)
testSortSingleInteger(cubeSort)
testSortNegativeIntegers(cubeSort)
