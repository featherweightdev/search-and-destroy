'use strict';

// Complete this algo
const binarySearch = (array, target, head = 0, tail = array.length - 1) => {
  // recursion until middle element returns true, or array has < 2
  if (tail - head < 2) {
    if (array[head] === target || array[tail] === target) {
      return true;
    } else {
      return false;
    }
  }
  // declare the element we're looking at
  let currentIdx = Math.floor((tail + head) / 2);
  if (array[currentIdx] === target) {
    return true;
  } else if (target < array[currentIdx]) {
    // if target is smaller, half the array and call binary search on the left side
    return binarySearch(array, target, head, currentIdx);
  } else {
    // if target is bigger, half the array and call binary search on the right side
    return binarySearch(array, target, currentIdx, tail);
  }
};
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

// this is for git

module.exports = binarySearch;
