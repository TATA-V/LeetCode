/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  const backtrack = (arr, start, sum) => {
    if (sum === target) {
      result.push([...arr]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      arr.push(candidates[i]);
      backtrack(arr, i, sum + candidates[i]);
      arr.pop();
    }
  };

  backtrack([], 0, 0);
  return result;
};