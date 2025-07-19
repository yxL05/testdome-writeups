async function firstSuccessfulPromise(promiseArray) {
  // Write your code here
  try {
    const res = await Promise.any(promiseArray);
    return res;
  }
  catch {
    return undefined;
  }
}

// let promise = firstSuccessfulPromise([new Promise((resolve, reject) => reject()), 
//               new Promise((resolve, reject) => resolve("Success!"))]);
// promise.then(result => console.log(result));

module.exports.firstSuccessfulPromise = firstSuccessfulPromise;