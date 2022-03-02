'use strict'
var a = 1; // error a is not defined
function foo() {
  console.log(a) // undefined
}
function foo2() {
  a = a + 1;
  console.log(a); // 1
  var a = 2;
  foo();
}
foo2();
