function calculateFinalSpeed(initialSpeed, inclinations) {
  // Your code goes here
  let res = initialSpeed;

  for (let incl of inclinations) {
    res -= incl;

    if (res <= 0) return 0;
  }

  return res;
}

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));