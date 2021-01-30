const best_sum = (n, numbers) => {
    const arr = Array(n + 1).fill(null);
    arr[0] = [];

    for (let i = 0; i <= n; i++) {
        if (arr[i] !== null) {
            for (let number of numbers) {
                if (i + number <= n) {
                    const solution = [number, ...arr[i]];
                    if (arr[i + number] === null
                        || solution.length < arr[i + number].length) {
                        arr[i + number] = solution;
                    }
                }
            }
        }
    }

    return arr[n];
}

console.log(best_sum(7, [5, 3, 4, 7]));
console.log(best_sum(8, [2, 3, 5]));
console.log(best_sum(8, [1, 4, 5]));
console.log(best_sum(100, [1, 2, 5, 25]));
