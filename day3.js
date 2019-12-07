const crossedWires = (w1, w2) => {
  let grid = new Array(500);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(500);
  }
  for (let wire = w1;; wire = w2) {
    let x = 0, y = 250;
    for (let i = 0; i < wire.length; i++) {
      let num = Number.parseInt(wire[i].substring(1, wire[i].length));
      let direction = wire[i][0];
      if (direction === 'R') {
        for (let i = x; i <= x + num; i++) {
          grid[y][i] === undefined ? grid[y][i] = 1 : grid[y][i] += 1;
        }
        x = x + num;
      } else if (direction === 'L') {
        for (let i = x; i >= x - num; i--) {
          grid[y][i] === undefined ? grid[y][i] = 1 : grid[y][i] += 1;
        }
        x = x - num;
      } else if (direction === 'U') {
        for (let i = y; i >= y - num; i--) {
          grid[i][x] === undefined ? grid[i][x] = 1 : grid[i][x] += 1;
        }
        y = y - num;
      } else if (direction === 'D') {
        for (let i = y; i <= y + num; i++) {
          grid[i][x] === undefined ? grid[i][x] = 1 : grid[i][x] += 1;
        }
        y = y + num;
      }
    }
    break;
  }
  let intersections = [];
  for (let m = 0; m < grid.length; m++) {
    for (let n = 0; n < grid.length; n++) {
      if (grid[m][n] > 1) {
        intersections.push([m, n]);
      }
    }
  }
  for (let i = 0; i < intersections.length; i++) {
    console.log(intersections[i]);
  }
}
let wire1 = [
  'R75',
  'D30',
  'R83',
  'U83',
  'L12',
  'D49',
  'R71',
  'U7',
  'L72',
];
let wire2 = [
  'U62',
  'R66',
  'U55',
  'R34',
  'D71',
  'R55',
  'D58',
  'R83'
]
console.log(crossedWires(wire1, wire2));