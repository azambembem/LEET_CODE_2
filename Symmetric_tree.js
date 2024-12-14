function isSymmetric(root) {
  if (!root) return true;

  return checkSymmetric(root.left, root.right);
}

function checkSymmetric(leftNode, rightNode) {
  if (!leftNode && !rightNode) {
    return true;
  }

  if (!leftNode || !rightNode) {
    return false;
  }

  if (leftNode.val !== rightNode.val) {
    return false;
  }

  return (
    checkSymmetric(leftNode.left, rightNode.right) &&
    checkSymmetric(leftNode.right, rightNode.left)
  );
}

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

console.log(isSymmetric(tree));
