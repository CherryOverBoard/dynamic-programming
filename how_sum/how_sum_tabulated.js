// time complexity: O(n^2 * m)
// space complexity: O(n^2 + m)

const how_sum = (n, numbers) => {
    const arr = Array(n + 1).fill(null);
    arr[0] = [];

    for (let i = 0; i <= n; i++) {
        if (arr[i] !== null) {
            for (let number of numbers) {
                if (i + number <= n) arr[i + number] = [number, ...arr[i]];
            }
        }
    }
    
    return arr[n];
}

console.log(how_sum(7, [2, 3]));
console.log(how_sum(7, [5, 3, 4, 7]));
console.log(how_sum(7, [2, 4]));
console.log(how_sum(8, [2, 3, 5]));
console.log(how_sum(300, [7, 14]));
