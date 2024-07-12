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
     * @return {void}
     */
    reorderList(head) {
        if(!head) return
        // split the linked list
        // first list ends at slow
        //second list starts at slow.next
        let slow= head;
        let fast= head.next;
        while(fast!=null && fast.next!=null)
        {
            slow= slow.next;
            fast=fast.next.next;
        
        }
    // reverse the second list
    let second = slow.next;
    //end the first half of the list
    //without this line the first list will not be separated properly and can cause infinite loops
    slow.next =null;
    let prev=null
    let next= null;
     while(second!=null)
     {
        next= second.next;
        second.next= prev;
        prev= second;
        second= next;
     }
     //now the prev pointer will be pointing at the head of reversed second list
     let first= head;
     second= prev;
     //merge these two lists
     while(second!=null)
     {
        const temp1= first.next;
        const temp2=second.next;
        first.next= second;
        second.next= temp1;

        first= temp1;
        second= temp2
     }

    }
}
