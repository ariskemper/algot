<p align="center"><img src="./logo_algot.jpg"></p>

[![TypeScript][typescript-badge]][typescript-url]
[![CI][build-badge]][build-url]
[![codecov][codecov-badge]][codecov-url]
[![Known Vulnerabilities][snyk-badge]][snyk-url]

# Algorithms in TypeScript

## Installing

- Install [Node](https://nodejs.org)
- Clone this repository: [https://github.com/ariskemper/algorithms](https://github.com/ariskemper/algorithms.git)
- run `npm install` to install all dependencies
- run tests `npm run test`
- run tests with coverage `npm run test:cov`
- generate typescript documentation `npm run doc`
- run benchmark for sort algorithms `npm run bench:sort`

## List of Implementations

- [sort](src/sort)
  - [x] [bitonicSort](src/sort/bitonic/bitonic.ts)
  - [ ] [brickSort]
  - [x] [bogoSort](src/sort/bogo/bogo.ts)
  - [x] [bubbleSort](src/sort/bubble/bubble.ts)
  - [x] [bucketSort](src/sort/bucket/bucket.ts)
  - [x] [cocktailShakerSort](src/sort/cocktail-shaker/cocktail-shaker.ts)
  - [x] [comboSort](src/sort/combo/combo.ts)
  - [x] [countingSort](src/sort/counting/counting.ts)
  - [x] [cubeSort](src/sort/cube/cube.ts)
  - [x] [cycleSort](src/sort/cycle/cycle.ts)
  - [ ] [exchangeSort]
  - [x] [gnomeSort](src/sort/gnome/gnome.ts)
  - [x] [heapSort](src/sort/heap/heap.ts)
  - [x] [insertionSort](src/sort/insertion/insertion.ts)
  - [x] [introSort](src/sort/intro/intro.ts)
  - [x] [mergeSort](src/sort/merge/merge.ts)
  - [ ] [pancakeSort]
  - [ ] [patienceSort]
  - [ ] [pigeonholeSort]
  - [ ] [quickSort]
  - [x] [radixSort](src/sort/radix/radix.ts)
  - [x] [randomQuickSort](src/sort/radix/radix.ts)
  - [x] [selectionSsort](src/sort/selection/selection.ts)
  - [x] [shellSort](src/sort/shell/shell.ts)
  - [ ] [smoothSort]
  - [ ] [stoogeSort]
  - [ ] [strandSort]
  - [ ] [timSort]
  - [ ] [treeSort](src/sort/tree/tree.ts)
  - [ ] [topSort]

[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
[build-badge]: https://github.com/ariskemper/algot/actions/workflows/build.yml/badge.svg
[build-url]: https://github.com/ariskemper/algot/actions/workflows/build.yml
[codecov-badge]: https://codecov.io/gh/ariskemper/algorithms/graph/badge.svg?token=J95CIN2UZT
[codecov-url]: https://codecov.io/gh/ariskemper/algorithms
[snyk-badge]: https://snyk.io/test/github/ariskemper/algorithms/badge.svg
[snyk-url]: https://snyk.io/test/github/ariskemper/algorithms
