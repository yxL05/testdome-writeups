function createCheckDigit(membershipId) {
  // Write the code that goes here.
  let resStr = membershipId;
  let res;

  do {
    res = 0;
    for (char of resStr) {
      res += parseInt(char); 
    }

    resStr = res.toString();
  }
  while (res >= 10);

  return res
}

console.log(createCheckDigit("55555"));