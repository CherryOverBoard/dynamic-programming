// time complexity: O(n)
// space complexity: O(n)

const fibonacci = (n) => {
    const tabulationArray = Array(n + 1).fill(0);
    tabulationArray[1] = 1;

    for(let i = 0; i < n; i++) {
        tabulationArray[i + 1] += tabulationArray[i];
        tabulationArray[i + 2] += tabulationArray[i];
    }

    return tabulationArray[n];
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(8)); // 21
console.log(fibonacci(50)); // 12586269025
