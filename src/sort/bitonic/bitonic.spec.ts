import { testSortRandomIntegers } from '../../utils/test-sort'
import { bitonicSort } from './bitonic'

testSortRandomIntegers(bitonicSort, 16)
