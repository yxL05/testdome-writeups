function ensure(value) {
  // Your code goes here
  if (typeof value === "undefined") throw new Error();
  return value;
}

try {
  console.log(ensure());
} catch(err) {
  console.log(err);
}