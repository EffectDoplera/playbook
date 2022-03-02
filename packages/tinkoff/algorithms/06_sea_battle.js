// [0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1] - 3

function ship(data) { // n^2
  let counter = 0;
  let rowsL = data.length
  let colsL = data[0].length

  function markNeighbour(grid, R, C) {
    grid[R][C] = 6
    if (grid[R][C-1] === 1) markNeighbour(grid, R, C-1)
    if (grid[R][C+1] === 1) markNeighbour(grid, R, C+1)
    if (grid?.[R-1]?.[C] === 1) markNeighbour(grid, R-1, C)
    if (grid?.[R+1]?.[C] === 1) markNeighbour(grid, R+1, C)
  }

  for (let R = 0; R < rowsL; R++) {
    for (let C = 0; C < colsL; C++) {
      if (data[R][C] === 1) {
        counter++;
        markNeighbour(data, R, C)
      }
    }
  }


  return counter;
}



console.log(
  ship([
    [1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0]
  ])
);
