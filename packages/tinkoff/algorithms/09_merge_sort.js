// Дано K сортированных числовых массивов длины N.
// Вывести в консоль отсортированную последовательность всех чисел.
// Вход [[1,2,3], [4,5,6], [7,8,9]] Выход [1,2,3,4,5,6,7,8,9]
// Вход [[1,2,6], [3,4,5], [7,8,9]] Выход [1,2,3,4,5,6,7,8,9]

function merge(arrFirst, arrSecond) {
  const arrSort = [];
  let i = 0;
  let j = 0;
  // сравниваем два массива, поочередно сдвигая указатели
  while (i < arrFirst.length && j < arrSecond.length) {
    if (arrFirst[i] < arrSecond[j]) {
      arrSort.push(arrFirst[i])
      i += 1
    } else {
      arrSort.push(arrSecond[j])
      j += 1
    }
  }
  // обрабатываем последний элемент при разной длине массивов
  // и возвращаем один отсортированный массив
  return [
    ...arrSort,
    ...arrFirst.slice(i),
    ...arrSecond.slice(j)
  ];
};

function mergeSort(arr) {
  if (!arr.length) {
    return arr
  }

  if (arr.length === 1) {
    return arr[0]
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([[1,2,6], [3,4,5], [7,8,9]]))
