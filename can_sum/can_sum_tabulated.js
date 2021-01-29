// time complexity: O(n * m)
// space complexity: O(n + m)

const can_sum = (n, numbers) => {
    const arr = Array(n + 1).fill(false);
    arr[0] = true;

    for (let i = 0; i <= n; i++) {
        if (arr[i]) {
            for (let j = 0; j < numbers.length; j++) {
                if (i + numbers[j] <= n) arr[i + numbers[j]] = true;
            }
        }
    }

    return arr[n];
}

console.log(can_sum(7, [2, 3]));
console.log(can_sum(7, [2, 3, 4, 7]));
console.log(can_sum(7, [2, 4]));
console.log(can_sum(8, [2, 3, 5]));
console.log(can_sum(300, [7, 14]));
