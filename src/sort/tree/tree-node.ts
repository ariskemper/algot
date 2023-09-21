export class TreeNode<T extends number | string> {
  value: T
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }

  insert(value: T, cmpFunc: (a: T, b: T) => number) {
    if (cmpFunc(value, this.value) < 0) {
      if (this.left === null) {
        this.left = new TreeNode(value)
      } else {
        this.left.insert(value, cmpFunc)
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(value)
      } else {
        this.right.insert(value, cmpFunc)
      }
    }
  }

  inOrderTraversal(arr: T[]) {
    if (this.left !== null) {
      this.left.inOrderTraversal(arr)
    }

    arr.push(this.value)

    if (this.right !== null) {
      this.right.inOrderTraversal(arr)
    }
  }
}
