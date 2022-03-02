const arr = [29, 2, 9, 32, 1, 15, 10, 12, 20, 6, 18, 26, 8, 36, 17, 13, 19, 16]
let count = 0

const quickSort = (arr) => {
  if (arr.length < 1) {
    return arr
  }

  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr[pivotIndex]
  let less = []
  let greater = []

  for (let i = 0; i < arr.length; i++) {
    count += 1

    if (i === pivotIndex) {
      continue
    }
    if (arr[i] < pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
console.log('count = ', count)
