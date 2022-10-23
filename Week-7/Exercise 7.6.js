
class Queue {
	constructor() {
	    this.stack1 = [];
	    this.stack2 = [];
    }

    enQueue(x) {
	
	// Move all elements from stack1 to stack2

	    while (this.stack1.length != 0) {

		    this.stack2.push(this.stack1.pop());

		    //stack1.pop();

	    }

	    // Push item into stack1

	    this.stack1.push(x);

	    // Push everything back to stack1

	    while (this.stack2.length != 0) {

		    this.stack1.push(this.stack2.pop());

	        //stack2.pop();
	    }
    }

    // Dequeue an item from the queue

    deQueue() {
	
        if (this.stack1.length == 0) {
            return -1;
        }

        let num = this.stack1[this.stack1.length - 1];
        this.stack1.pop();
        return num;
    }
}

let que = new Queue();

let arr = [1, 2, 1, 3, 2, 1, 4, 2];

for (let i = 0; i < arr.length; i++) {

  if (arr[i] == 1) {

    que.enQueue(arr[i + 1]);
    i++;

  } else if (arr[i] == 2) {

    console.log(que.deQueue()); // Output will be 2 3
    
  }

}

//Time Complexity: push -> O(N)   pop -> O(1)
//Auxiliary Space: O(N)