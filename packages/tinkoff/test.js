async function runSequentially(functions) {
  return new Promise((resolve, reject) => {
    let count = functions.length;
    const result = [];
    const checkDone = () => {
      if (--count === 0) {
        resolve(result);
      }
    };
    functions.forEach((p) => {
      p().then((x) => {
        result.push(x)
      }, reject)
      .then(checkDone);
    });
  });
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
    counter += 1;
    resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);

if(promise) {
  promise.then(result => console.log(result))
  .catch(error => console.log("Error: " + error));
}
