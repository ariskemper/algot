import { compare } from '../../utils'
import { TreeNode } from './tree-node'

/**
 * Tree Sort builds a binary search tree from the elements and performs an
 * in-order traversal to get them in sorted order.
 *
 *  Time Complexity
 * - Best Case: O(n log n) - When the tree is balanced, building the binary
 * search tree (BST) will take O(n log n) time. The in-order traversal to
 * retrieve the sorted elements also takes O(n) time. Therefore, the best-case
 * time complexity is O(n log n).
 *
 * - Average case: O(n log n) - For randomly build trees.
 *
 * - Worst Case: O(n^2) - When the tree is a skewed tree (each node has only one
 * child), the time taken to insert an element into the tree becomes O(n), making
 * the total time to build the tree O(n^2). The in-order traversal still takes
 * O(n) time. Therefore, the worst-case time complexity is O(n^2).
 *
 * Space Complexity: O(n) - a tree sort will require O(n) additional space to
 * store the binary search tree, assuming that the sorted array replaces
 * the original array and therefore doesn't count as additional space.
 *
 * Tree Sort algorithm has a good best-case and average-case time complexity,
 * it's worst-case performance is inferior to other O(n log n) sorting algorithms
 * like Quick Sort, Merge Sort, and Heap Sort.
 *
 * @param arr unsorted array
 * @returns sorted array
 */
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

export type TreeSortFn = typeof treeSort
