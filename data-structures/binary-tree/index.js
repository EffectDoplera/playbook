/**
 * Recursive traversal of the binary tree
 */
const sumBinaryTreeValues = ({ value, left, right }) => {
  let result = value

  if (left) {
    result += sumBinaryTreeValues(left)
  }

  if (right) {
    result += sumBinaryTreeValues(right)
  }

  return result
}

const binaryTree = {
  value: 5,
  left: {
    value: 1,
    right: {
      value: 2,
    },
  },
  right: {
    value: 2,
  },
}

console.log(sumBinaryTreeValues(binaryTree)) // 10
