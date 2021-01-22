// time complexity: O(n)
// space complexity: O(n)

function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 1 || n === 2) return 1;
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(100));
