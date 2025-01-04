function isCousins(root, x, y) {
  if (!root || root.val === x || root.val === y) return false;

  const [xDepth, xParent] = findDepthAndParent(root, x, 0, null);
  const [yDepth, yParent] = findDepthAndParent(root, y, 0, null);

  return xDepth === yDepth && xParent !== yParent;
}

function findDepthAndParent(node, target, depth, parent) {
  if (!node) return [-1, null];
  if (node.val === target) return [depth, parent];

  const left = findDepthAndParent(node.left, target, depth + 1, node.val);
  if (left[0] !== -1) return left;

  return findDepthAndParent(node.right, target, depth + 1, node.val);
}
