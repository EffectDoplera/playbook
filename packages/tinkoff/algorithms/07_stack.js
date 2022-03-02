// Написать класс Stack, который будет работать как стэк и иметь 3 метода:
// push - для добавления в конец элементов
// pop - для удаления последнего элемента
// getMin - для возвращения минимального значения в стэке.
// Сложность всех операций должна быть O(1), то есть обходить стэк циклом нельзя.

class Stack {
  constructor(){
    this.arr = [];
  }

  pop() {
    return this.arr.pop().value;
  }

  push(a) {
    const currentMin = this.arr.length ? this.arr[this.arr.length - 1].currentMin : a;
    this.arr.push({ value: a, currentMin: currentMin > a ? a : currentMin});
  }

  getMin() {
    return this.arr[this.arr.length - 1].value;
  }
}


