/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 배열을 한 번 돌아서 숫자를 더했을 때, target값을 가지는 배열의 index를 구해야 함
  let arr = [];
  let found = false;

  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i);
        arr.push(j);
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
  }

  let result = new Set(arr);

  return [...result];
};