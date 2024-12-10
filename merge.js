var merge = function (nums1, m, nums2, n) {
  let idx1 = m;
  let idx2 = n;
  let idx3 = m + n;

  while (n > 0) {
    if (nums1[idx1 - 1] > nums2[idx2 - 1]) {
      nums1[idx3 - 1] = nums1[idx1 - 1];
      idx3--;
      idx1--;
    } else {
      nums1[idx3 - 1] = nums2[idx2 - 1];
      idx3--;
      idx2--;
    }

    if (idx1 === 0) {
      while (idx2 > 0) {
        nums1[idx3 - 1] = nums2[idx2 - 1];
        idx3--;
        idx2--;
      }
      break;
    } else if (idx2 === 0) {
      break;
    } else if (idx3 === 0) {
      break;
    }
  }
};
