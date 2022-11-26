// for call ()
var obj = { num: 2 }; // function accept multiple arrguments

function add(a, b){
  return this.num + a + b;
}

console.log(add.call(obj, 3, 5));

10 // output will , how because (obj its contian 2)+2+3

// for apply()
var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

console.log(add.apply(obj, [3, 5]));

//value 10

//The difference between is that call() accepts an argument list, but apply() accepts an array of arguments.

var obj = { num: 2 };

function add(a, b){
  return this.num + a + b;
}

const func = add.bind(obj, 3, 5);
func();    // Returns 10

//bind() returns a function that can be executed later on.