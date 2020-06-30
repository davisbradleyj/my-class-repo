// Let's represent an integer in a linked list format by having each node represent a digit in the number. The nodes make up the number in reversed order.

// For example, the following linked list:

// 1 -> 2 -> 3 -> 4 -> 5
// is the number 54321.

// Given two linked lists in this format, return their sum in the same linked list format.

// For example, given

// 9 -> 9
// 5 -> 2
// return 124 (99 + 25) as:

// 4 -> 2 -> 1

LinkedList.prototype.insert = function (val, prevNode) {
    //create a new node with the value passed
    var node = new Node(val);
    if (!prevNode) { // if there was no value passed as an argument to the prevNode parameter
        if (!this.head) {   //if head is null
            this.tail = node; //set the tail to be the new node
        } else { //if head is not null then...
            node.next = this.head; //set the new node's 'next' field to be set to the heads next which which was null or pointed to another object
        }
        this.head = node; // if the head was null then set the head node to be the new node // this is true if we are prepending - creating a node to replace head (passing no prevNode)
        //yep - the head and the tail of the LL will both be pointing to the same object - it's only lonly node. 
    } else { //if there was a value passed as an argument to the prevNode parameter
        node.next = prevNode.next; //the new node's field of 'next' will be now set to the prevNode's 'next' value
        prevNode.next = node; //now set the previous Node's 'next' field to be set to the new node
        // if insert into end of list, then update tail node
        if (this.tail === prevNode) { // if the prev Node was the last Node (same exact object) then set the LL's tail to be the new Node
            this.tail = node;
        }
    }
    this.length++; //yipee we added a new node increase the numbe of nodes on the LL
}
//   Kasey Chang11:23 AM
//   let n1=new (Node(9,new Node(9,null))? 


class Node {
	constructor(value, next) {
		this.value = value
		this.next = next
	}
}
class LinkedList {
	constructor(head = null, size = 0) {
		this.head = head
		// this.tail=tail
		this.size = size
	}
	add(value) {
		let newNode = new Node(value, null)
		if (!this.head) {
			this.head = newNode;
		}
		else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}
	returnValue(){
		let current = this.head;
		let string = ""
		while (current) {
			string += current.value
			current = current.next;
		}
		return parseInt(string.split("").reverse().join(""))
	}
	print(){
		let current = this.head;
		let string = ""
		while (current) {
			string += current.value
			current = current.next;
		}
		console.log(parseInt(string.split("").reverse().join("")))
	}
}
function numberToLinkedList(int){
	let list = new LinkedList()
	let stringNum = int.toString().split("").reverse().join("")
	for (let i = 0; i < stringNum.length; i++) {
		list.add(stringNum[i])
	}
	return list
}
let linkedList1 = numberToLinkedList(99)
let linkedList2 = numberToLinkedList(25)
function addLinkedLists(list1,list2){
	let sum = list1.returnValue() + list2.returnValue()
	let total = numberToLinkedList(sum)
	total.print()
	return total
}
linkedList1.print()
linkedList2.print()
console.log(addLinkedLists(linkedList1, linkedList2))

// class Node:
//     def __init__(self, val, next=None):
//         self.val = val
//         self.next = next

// def add(node0, node1, carry=0):
//     if not node0 and not node1 and not carry:
//         return None

//     node0_val = node0.val if node0 else 0
//     node1_val = node1.val if node1 else 0
//     total = node0_val + node1_val + carry

//     node0_next = node0.next if node0 else None
//     node1_next = node1.next if node1 else None
//     carry_next = 1 if total >= 10 else 0


//     return Node(to
// It's NOT JavaScript