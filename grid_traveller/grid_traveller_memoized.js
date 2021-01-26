function grid(n, m, memo = {}) {
    if (n === 0 || m === 0) return 0;
    if (n === 1 && m === 1) return 1;

    let key = getKey(n, m);
    if (memo[key]) return memo[key];

    memo[key] = grid(n - 1, m, memo) + grid(n, m - 1, memo);
    return memo[key];
}

function getKey(n, m) {
    return n + "," + m;
}

console.log(grid(1, 1));
console.log(grid(1, 2));
console.log(grid(2, 1));
console.log(grid(2, 2));
console.log(grid(2, 3));
console.log(grid(3, 2));
console.log(grid(3, 3));
console.log(grid(18, 18));