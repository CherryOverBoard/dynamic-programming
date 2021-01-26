// time complexity: O(n * m^2)
// space complexity: O(m^2)

function how_sum(target, numbers, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    for(let number of numbers) {
        const newTarget = target - number;
        const how = how_sum(newTarget, numbers, memo);
        if(how !== null) {
            memo[target] = [...how, number];
            return memo[target];
        }
    }
    memo[target] = null;
    return null;
}

console.log(how_sum(7, [2, 3]));
console.log(how_sum(7, [5, 3, 4, 7]));
console.log(how_sum(7, [2, 4]));
console.log(how_sum(8, [2, 3, 5]));
console.log(how_sum(300, [7, 14]));
