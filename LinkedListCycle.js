/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow=head;
        let fast=head.next;
        while(slow!=fast)
        {
            if(fast==null || fast.next==null || fast.next.next == null)
            {
                return false;
            }
            else
            {
                slow=slow.next;
                fast= fast.next.next;
            }

        }
        return true;
       
    }
}
