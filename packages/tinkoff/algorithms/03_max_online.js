// [[1, 5], [0, 1], [4, 5]] -> 2
// [[1, 5], [5, 10]] -> 1
// [] -> 0

function maxOnStream(data) {
  const result = {};
  let maxOnline = 0

  for (let userData of data) {
    for (let i = userData[0]; i <= userData[1]; i++) {
      if (result[i]) {
        result[i] += 1;
      } else {
        result[i] = 1;
      }

      maxOnline = Math.max(maxOnline, result[i])
    }
  }

  return maxOnline
}

console.log(
  maxOnStream([
    [1, 5],
    [0, 1],
    [4, 5],
    [0, 5]
  ])
);

console.log(
  maxOnStream([
    [
      [1, 5],
      [5, 10]
    ]
  ])
);

console.log(maxOnStream([]));
