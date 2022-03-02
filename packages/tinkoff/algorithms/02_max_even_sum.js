//Задача уровня junior. Коллекция не отсортирована. Например [2, 1, 4, 5, 6].
// Из этой коллекции нужно найти максимальную четную сумму неважно какой последовательности.
// Вариант решения - перебрать элементы, получить их сумму,
// одновременно с перебором искать минимальное нечетное число.
// Результат проверить на четность. Если итоговая сумма будет нечетной,
// вернуть итоговую сумму - минимальное нечетное число
// [2, 1, 4, 5, 6] => 18      [ 3, 4, 2, 5, 7] => 18  ->  (21 - 3).
// Оценить сложность алгоритма по времени и по памяти.


function isEven(number) {
  return number % 2 === 0
}

function maxEvenNumber(numbers) {
  let sum = 0
  let minOdd

  for (let number of numbers) {
    sum += number

    if (!isEven(number)) {
      minOdd = minOdd ? Math.min(minOdd, number) : number
    }
  }

  return isEven(sum) ? sum : sum - minOdd
}

console.log(maxEvenNumber([2, 1, 4, 5, 6]))
console.log(maxEvenNumber([ 3, 4, 2, 5, 8]))
