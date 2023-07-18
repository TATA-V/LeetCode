/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const combinations = [];

  function backtrack(start, current) {
    if (current.length === k) {
      combinations.push([...current]);
      return;
    }

    for (let i = start; i <= n; i++) {
      current.push(i);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(1, []);

  return combinations;
};