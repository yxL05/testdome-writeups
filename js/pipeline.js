function pipeline(...funcs) {
  return (arg) => {
    // Your code goes here
    let res = arg;
    for (let func of funcs) {
      res = func(res);
    }

    return res;
  }
}

let fun = pipeline(x => x * 3, x => x + 1, x => x / 2);
console.log(fun(3)); // Should print 5