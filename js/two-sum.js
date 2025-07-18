/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
  // Your code goes here
  const target = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let v = numbers[i];

    if (target.has(v)) {
      return [i, target.get(v)];
    }
    target.set(sum - v, i);
  }

  return null;
}

const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
console.log(indices);