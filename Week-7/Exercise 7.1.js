var head; // head of list

class Node {
	constructor(val) {
		this.data = val;
		this.next = null;
	}
}

function reverse(head) {

	if (head == null || head.next == null)
		return head;

		// reverse the rest list and put the first element at the end

		var rest = reverse(head.next);

		head.next.next = head;

		head.next = null;

		return rest;
}

// Function to print linked list

function print() {
	var temp = head;
        while (temp != null) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
}

// Function to push the data to linked list

function push(data) {
	var temp = new Node(data);
	    temp.next = head;
	    head = temp;
}

// Driver program to test above function
	
// Start with the empty list

push(0);
push(1);
push(2);
push(3);
push(4);

console.log("Given linked list");

print();  // 4 3 2 1 0

head = reverse(head);

console.log("Reversed Linked list");

print(); // 0 1 2 3 4

// Time Complexity : O(n) 
// Auxiliary Space : O(n)