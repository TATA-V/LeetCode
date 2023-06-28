/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let tmp = 0;
    const result = new ListNode();
    let cur = result;
    while(true) {
        const val1 = l1 == null ? 0 : l1.val;
        const val2 = l2 == null ? 0 : l2.val;
        const sum = val1 + val2 + tmp;
        const val = sum % 10;
        tmp = parseInt(sum / 10);
        cur.val = val;

        if(l1 != null) l1 = l1.next;
        if(l2 != null) l2 = l2.next;
        if(tmp == 0 && l1 == null && l2 == null) break;
        
        cur.next = new ListNode();
        cur = cur.next;
    }
    return result;
};