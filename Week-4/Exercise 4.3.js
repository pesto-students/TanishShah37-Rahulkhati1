const Fib = function (n) {
    return {
      [Symbol.iterator]: function () {
        let i = 1,
          _prev = 0,
          _next = 0;
  
        return {
          next: () => {
            if (i++ <= n) {
              [_prev, _next] = [_next, _prev + _next || 1];
              return { value: _prev, done: false };
            } else return { done: true };
          },
        };
      },
    };
  };
  // print like this is final
  console.log("The Fibonaci Series is:"); // [0,1,1,2,3,5,8]
  for (const num of Fib(7)) {
    console.log(num);
  }
  // So, in this case our fib method will return an object which is Iterators.
  