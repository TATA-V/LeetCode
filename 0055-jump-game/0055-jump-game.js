/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    maxIdx = Math.max(maxIdx, i + nums[i]);

    if (maxIdx >= nums.length - 1) return true;
    if (i >= maxIdx) return false;
  }

  return false;
};