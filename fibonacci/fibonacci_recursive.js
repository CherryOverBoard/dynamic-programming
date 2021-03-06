// time complexity: O(2^n)
// space complexity: O(n)

function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(40));
