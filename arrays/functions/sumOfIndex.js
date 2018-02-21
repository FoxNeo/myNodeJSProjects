let vals = [5, 4, 1, 2, 9];
let sum = 0;
for (let val of vals) {
    sum += val;
}
console.log(sum);

// Other way to do it without loop
let answer = vals.reduce((acc, val) => acc + val);

console.log(answer);