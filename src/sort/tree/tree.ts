import { compare } from '../../utils'
import { TreeNode } from './tree-node'

export function treeSort<T extends number | string>(arr: T[]): T[] {
  if (arr.length === 0) return []

  const root = new TreeNode(arr[0])

  for (let i = 1; i < arr.length; i++) {
    root.insert(arr[i], compare)
  }

  const sortedArray: T[] = []
  root.inOrderTraversal(sortedArray)

  return sortedArray
}

export const TreeSortFn = typeof treeSort
