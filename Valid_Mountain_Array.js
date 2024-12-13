var validMountainArray = function (arr) {
  if (arr.length < 3) return false; // 길이가 3보다 작으면 산 배열이 아님

  let left = 0;
  let right = arr.length - 1;

  // 왼쪽에서 가장 큰 숫자까지 올라감
  while (left < arr.length - 1 && arr[left] < arr[left + 1]) {
    left++;
  }

  // 오른쪽에서 가장 큰 숫자까지 올라감
  while (right > 0 && arr[right] < arr[right - 1]) {
    right--;
  }

  // 양쪽 포인터가 만나야 하고, 가장 큰 값이 배열의 처음이나 끝에 있으면 안 됨
  return left > 0 && right < arr.length - 1 && left === right;
};

// 사용 예시
console.log(validMountainArray([2, 1])); // false
console.log(validMountainArray([3, 5, 5])); // false
console.log(validMountainArray([0, 3, 2, 1])); // true
console.log(validMountainArray([1, 3, 2])); // true
