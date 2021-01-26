// time complexity: O(m^2 * n)
// space complexity: O(m^2)

function best_sum(target, numbers, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    let best = null;
    for(let number of numbers) {
        const newTarget = target - number;
        const current = best_sum(newTarget, numbers, memo);
        if (current !== null && best === null) {
            best = [...current, number];
        } else if(current !== null && current.length + 1 < best.length) {
            best = [...current, number];
        }
    }

    memo[target] = best;
    return best;
}

console.log(best_sum(7, [5, 3, 4, 7]));
console.log(best_sum(8, [2, 3, 5]));
console.log(best_sum(8, [1, 4, 5]));
console.log(best_sum(100, [1, 2, 5, 25]));