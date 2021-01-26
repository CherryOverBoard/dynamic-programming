// time complexity: O(n^m * m)
// space complexity: O(m)

function how_sum(target, numbers) {
    if (target === 0) return [];
    if (target < 0) return null;

    for(let number of numbers) {
        const newTarget = target - number;
        const how = how_sum(newTarget, numbers);
        if(how !== null) {
            return [...how, number];
        }
    }
    return null;
}

console.log(how_sum(7, [2, 3]));
console.log(how_sum(7, [5, 3, 4, 7]));
console.log(how_sum(7, [2, 4]));
console.log(how_sum(8, [2, 3, 5]));
//console.log(how_sum(300, [7, 14]));
