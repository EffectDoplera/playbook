console.log(1);

setTimeout(function () {
  console.log(2);
});

/*  Не блокируется main tread - macrotasks     */
function s() {
  setTimeout(() => {
    console.log('7');
    s();
  });
}
s();

/*  Блокируется main tread - microtasks     */
function p() {
  Promise.resolve(3).then(console.log).then(p);
}
p();

Promise.resolve('4').then(console.log);

console.log(4);

setTimeout(function () {
  console.log(5);
}, 0);

console.log(6);

// 1 4 6
