function middleNode(head) {
  let nodeCnt = 0;
  let node = head;

  while (node !== null) {
    nodeCnt++;
    node = node.next;
  }

  const mid = Math.floor(nodeCnt / 2) + 1;
  node = head;

  for (let i = 1; i < mid; i++) {
    node = node.next;
  }

  return node;
}
