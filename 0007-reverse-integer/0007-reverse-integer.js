/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = "";
  let arr = x.toString().split("");
  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = -Math.pow(2, 31);

  if (arr[0] === "-" || arr[0] === "+") {
    sign = arr[0];
    arr.shift();
  }

  let reverseArr = arr.reverse();

  if (reverseArr[0] === "0") {
    reverseArr.shift();
  }

  if (sign !== "") {
    reverseArr.unshift(sign);
  }

  let reverseNum = Number(reverseArr.join(""));

  if (reverseNum > MAX_INT || reverseNum < MIN_INT) {
    return 0;
  } else {
    return reverseNum;
  }
};