class SinglyLinkedListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

let index3 = new SinglyLinkedListNode(7, null)
let index2 = new SinglyLinkedListNode(1, index3)
let index1 = new SinglyLinkedListNode(13, index2)
let index0 = new SinglyLinkedListNode(16, index1)
// console.log(index0)
// console.log(index1)
// console.log(index2)

function insertNodeAtPosition(head, data, position) {
    //create new node
    let newNode = new SinglyLinkedListNode(data);
    // placeholder
    let hold = null;
    // variable to use to cycle through array
    let current = head;
    // loop counter
    let index = 0;
    while (true) {
        // if (2 === 2)
        if (index === position) {
            // temp is the head node
            let temp = current;
            // hold.next points to the new node (data (ie. 1))
            hold.next = newNode;
            // newNode.next points to the temp node (7)
            newNode.next = temp;
            break;
        }
        // hold becomes current for each loop
        hold = current;
        // current (head) is now head.next
        current = current.next;
        index++;
    }
    return head;
}




console.log(insertNodeAtPosition(index0, 1, 2))