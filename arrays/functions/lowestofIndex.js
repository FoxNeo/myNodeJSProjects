let values = [4, 5, 6, 9, 200, 1, 67]
let lowest = values.reduce((a, b) => a < b ? a : b);

console.log(lowest);