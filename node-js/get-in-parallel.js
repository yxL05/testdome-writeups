async function getInParallel(apiCalls) {
  try {
    const res = await Promise.allSettled(apiCalls.map(fn => fn()));

    return res.map((v) => v.value);
  }
  catch (e) {
    throw e;
  }
}

let promise = getInParallel([() => Promise.resolve("First API call!"),
                             () => Promise.resolve("Second API call!")]);
if(promise) {
  promise.then((result) => console.log(result)).catch((err) => console.log(err));
}
module.exports.getInParallel = getInParallel;