var leafSimilar = function (root1, root2) {
  const getLeafValues = (root) => {
    const stack = [root];
    const leaves = [];
    while (stack.length) {
      const node = stack.pop();
      if (node) {
        if (!node.left && !node.right) {
          leaves.push(node.val);
        } else {
          stack.push(node.right);
          stack.push(node.left);
        }
      }
    }
    return leaves;
  };

  const leaf1 = getLeafValues(root1);
  const leaf2 = getLeafValues(root2);

  return (
    leaf1.length === leaf2.length && leaf1.every((val, i) => val === leaf2[i])
  );
};
