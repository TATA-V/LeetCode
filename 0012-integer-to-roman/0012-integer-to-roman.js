/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let roman = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < roman.length; i++) {
    // 주어진 숫자 num이 로마 숫자의 값보다 크거나 같은 경우에 실행된다.
    while (num >= roman[i].value) {
      result += roman[i].symbol; // 로마 숫자 추가
      num -= roman[i].value; // 주어진 숫자에서 해당 값을 뺌

      // console.log(`Current result: ${result}, Current num: ${num}`);
    }
  }

  return result;
};