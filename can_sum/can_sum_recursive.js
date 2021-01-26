function can_sum(target, numbers) {
    if (target === 0) return true;
    if (target < 0) return false;
    for(let number of numbers) {
        const newTarget = target - number;
        if (can_sum(newTarget, numbers)) {
            return true;
        }
    }
    return false;
}

console.log(can_sum(7, [2, 3]));
console.log(can_sum(7, [2, 3, 4, 7]));
console.log(can_sum(7, [2, 4]));
console.log(can_sum(8, [2, 3, 5]));
//console.log(can_sum(300, [7, 14]));
