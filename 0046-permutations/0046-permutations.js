/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let arr = [...nums];
  let selectNumber = arr.length;
  let results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 0~현재 인덱스 + 현재 인덱스 다음부터~끝까지
    const permutations = permute(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
  });
  return results;
};