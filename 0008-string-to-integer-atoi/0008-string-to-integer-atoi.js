/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let max = Math.pow(2, 31)-1;
    let min = -Math.pow(2, 31);
    let num = parseInt(s);
    if (Number.isNaN(num)){
        return 0;
    }
    if (num > max){
        return max;
    }else if (num < min){
        return min;
    }
    return num;
};
