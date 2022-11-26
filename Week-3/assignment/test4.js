function createStack() {
    const items = []; //this will make items available only inside this scope and not outside the function
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      },
    };
}

 
const stack = createStack();
stack.push(10);
stack.push(20);
stack.push(5);
stack.pop(); // => 5
stack.items; // =>  this should be displaying undefined
console.log("items = ", stack.items);

// By moving items variable inside createStack() scope. 
// There is no other direction to access or modify items array from the outside of createStack() scope.
// Finally items is a private variable, and the stack is encapsulated only push() and pop() method is public.