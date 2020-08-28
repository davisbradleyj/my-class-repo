// Definition for singly - linked list.
  // function ListNode(val, next) {
  //   this.val = (val === undefined ? 0 : val)
  //   this.next = (next === undefined ? null : next)
  // }

//  @param {ListNode} head
//  @return {ListNode}
 
var reverseList = function (head) {
  // set Null to be the 'next' node ie. previous node to 1
    let prevNode = null;
  // create loop which will look for a non-null head and begin reassigning values to switch linking positions
    while (head !== null) {
      let nextNode = head.next; // instantiate nextNode and assign it as the next head node (head.next)
      head.next = prevNode; // reassign next head node as the previous Node (prevNode)
      prevNode = head; // reassign prevNode to be the head node
      head = nextNode; // reassign head to be the nextNode
    }
    return prevNode
  };

  console.log(reverseList([1,2]))