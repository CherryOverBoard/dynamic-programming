function all_construct(target, words, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    let ret = [];
    for(let prefix of words) {
        if (target.startsWith(prefix)) {
            const newTarget = target.slice(prefix.length);
            const solutions = all_construct(newTarget, words, memo);
            if (solutions !== null) {
                // if (ret === null) {
                //     ret = [];
                // }
                for(let s of solutions) {
                    ret.push([prefix, ...s]);
                }
            }
        }
    }
    memo[target] = ret;
    return ret;
}

console.log(all_construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); // 4
console.log(all_construct('skateboard', ['sk', 'bo', 'rd', 'skat', 'board', 'ska', 'boar'])); // 0
console.log(all_construct('eeee', ['e', 'ee'])); // 5
console.log(all_construct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(all_construct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
