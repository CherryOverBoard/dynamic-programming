// time complexity: O(n^m * m)
// space complexity: O(m^2)

function best_sum(target, numbers) {
    if (target === 0) return [];
    if (target < 0) return null;

    let best = null;
    for(let number of numbers) {
        const newTarget = target - number;
        const current = best_sum(newTarget, numbers);
        if (current !== null && best === null) {
            best = [...current, number];
        } else if(current !== null && current.length + 1 < best.length) {
            best = [...current, number];
        }
    }

    return best;
}

console.log(best_sum(7, [5, 3, 4, 7]));
console.log(best_sum(8, [2, 3, 5]));
console.log(best_sum(8, [1, 4, 5]));
//console.log(best_sum(100, [1, 2, 5, 25]));