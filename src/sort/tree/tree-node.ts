export class TreeNode<TElement extends number | string> {
  value: TElement
  left: TreeNode<TElement> | null = null
  right: TreeNode<TElement> | null = null

  constructor(value: TElement) {
    this.value = value
  }

  insert(value: TElement, cmpFunc: (a: TElement, b: TElement) => number) {
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

  inOrderTraversal(arr: TElement[]) {
    if (this.left !== null) {
      this.left.inOrderTraversal(arr)
    }

    arr.push(this.value)

    if (this.right !== null) {
      this.right.inOrderTraversal(arr)
    }
  }
}
