const req = [
  Promise.resolve(7),
  Promise.resolve(1),
  new Promise((res) => {
    setTimeout(() => res(111), 4000);
  })
];

promiseAll(req).then((res) => console.log(res));
// Выведет в консоль: [7, 1, 111]

function promiseAll(requests) {
  return new Promise((resolve, reject) => {
    let count = requests.length;
    const result = [];
    const checkDone = () => {
      if (--count === 0) {
        resolve(result);
      }
    };
    requests.forEach((p) => {
      p.then((x) => {
        result.push(x)
      }, reject)
      .then(checkDone);
    });
  });
}
