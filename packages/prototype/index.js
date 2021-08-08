/**
 * Add gmobal delay to all functions
 */

Function.prototype.delay = function (delay) {
  return (...args) => setTimeout(() => this(...args), delay)
}

function foo() {
  console.log(arguments)
}

const fooWithDelay = foo.delay(2000)

fooWithDelay(1, 2, 3)
