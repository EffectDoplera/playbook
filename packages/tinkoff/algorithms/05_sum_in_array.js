const arr = [1, 2, 4, 6, 1, 3, 2];
const number = 6;

function sumInArray(arr, sum) { // n + log n
  const sortedArr = arr.sort(); // log n
  let right = sortedArr.length - 1;
  let left = 0;

  while (left !== right) { // n
    const curSum = sortedArr[left] + sortedArr[right];

    if (curSum < sum) {
      left++;
    } else if (curSum > sum) {
      right--;
    } else {
      return [sortedArr[left], sortedArr[right]];
    }
  }

  return [];
}

console.log(sumInArray(arr, number));
