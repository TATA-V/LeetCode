/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 음수인지도 구분해야 함
  // 숫자 뒤집어서 처음 들어온 값이랑 같은지 보면 될 듯

  let reverseArr = x.toString().split("").reverse();

  if (reverseArr.join("") === x.toString()) {
    return true;
  } else {
    return false;
  }
};