/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    const sArr = s.split(" ");
    
    return sArr[sArr.length - 1].length;
    
};