function grid(n, m) {
    if (n === 0 || m === 0) return 0;
    if (n === 1 && m === 1) return 1;
    return grid(n - 1, m) + grid(n, m - 1);
}

console.log(grid(1, 1));
console.log(grid(1, 2));
console.log(grid(2, 1));
console.log(grid(2, 2));
console.log(grid(2, 3));
console.log(grid(3, 2));
console.log(grid(3, 3));
// console.log(grid(18, 18));