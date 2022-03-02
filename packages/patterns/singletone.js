class Singletone {
  constructor(data) {
    if (Singletone.exist) {
      return Singletone.instance
    }

    Singletone.instance = this
    Singletone.exist = true

    this.data = data
  }

  getName() {
    return this.data
  }
}

const singleTone1 = new Singletone('one')
const singleTone2 = new Singletone('two')

console.log(singleTone1.getName(), singleTone2.getName())
