function hasPathSum(root, targetSum) {
  if (root === null) {
    return false;
  }

  if (targetSum - root.val === 0 && root.left === null && root.right === null) {
    return true;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
