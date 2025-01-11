var sumRootToLeaf = function (root) {
  const getSum = (node, currentPath) => {
    if (!node) return 0;

    currentPath += node.val;

    if (!node.left && !node.right) {
      return parseInt(currentPath, 10);
    }

    const leftSum = getSum(node.left, currentPath);
    const rightSum = getSum(node.right, currentPath);

    return leftSum + rightSum;
  };

  return getSum(root, "");
};
