Array.prototype.myReduce = function (callBack, initialValue) {
  for (let i = 1; i < this.length; i++) {
    initialValue = callBack(initialValue, this[i], i, this)
  }

  return initialValue
}
