import { swap } from '../../../src/utils'

export function generateRandomizedIntegerArray(
  size: number,
  range: { min: number; max: number }
): number[] {
  const arr: number[] = []
  for (let i = 0; i < size; i++) {
    arr.push(randomInteger(range.min, range.max))
  }
  return arr
}

export function generateSortedIntegerArray(
  size: number,
  start: number = 0,
  step: number = 1
): number[] {
  if (size < 0) {
    throw new Error('Size must be a non-negative integer')
  }

  return Array.from({ length: size }, (_, index) => start + index * step)
}

export function generateDescSortedIntegerArray(size: number): number[] {
  return generateSortedIntegerArray(size).sort((a, b) => b - a)
}

export function generateWithUniqueValuesIntegerArray(
  size: number,
  uniqueValues: number[]
): number[] {
  if (size < 0) {
    throw new Error('Size must be a non-negative integer')
  }

  if (uniqueValues.length === 0) {
    throw new Error('Unique values array must not be empty')
  }

  const result: number[] = []
  for (let i = 0; i < size; i++) {
    const randomIndex = randomArrayIndex(uniqueValues.length)
    result.push(uniqueValues[randomIndex])
  }

  return result
}

export function generateNearlySortedIntegerArray(
  size: number,
  swapCount: number
): number[] {
  if (size < 0 || swapCount < 0) {
    throw new Error('Size and swap count must be non-negative integers')
  }

  const arr: number[] = Array.from({ length: size }, (_, index) => index)

  for (let i = 0; i < swapCount; i++) {
    const index1 = randomInteger(0, size - 1)
    const index2 = randomInteger(0, size - 1)
    swap(arr, index1, index2)
  }

  return arr
}

function randomInteger(min: number, max: number): number {
  if (min > max) {
    throw new Error('Min value cannot be greater than Max value')
  }

  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomArrayIndex(size: number): number {
  return randomInteger(1, size - 1)
}
