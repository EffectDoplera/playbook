console.log(1);

setTimeout(function() {
  console.log(2);
});

function s() {
  setTimeout(() => {
    console.log('7');
    s();
  });
}


function p() {
  Promise.resolve(3).then(console.log);
}
p();

console.log(4);

setTimeout(function() {
  console.log(5);
}, 0);

console.log(6);

// 1 4 6 3....3... || 2 5
