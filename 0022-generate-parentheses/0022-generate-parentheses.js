/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  let backtrack = (combi, open, close) => {
    if (combi.length === n * 2) {
      result.push(combi);
      return;
    }

    if (open < n) {
      backtrack(combi + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(combi + ")", open, close + 1);
    }
  };

  backtrack("", 0, 0);
  return result;
};