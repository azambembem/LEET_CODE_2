var middleNode = function (head) {
  let length = 0;
  let current = head;

  while (current) {
    current = current.next;
    length++;
  }

  let mid = Math.floor(length / 2);
  current = head;

  while (mid > 0) {
    current = current.next;
    mid--;
  }

  return current;
};
