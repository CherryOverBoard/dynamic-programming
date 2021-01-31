// time complexity: O(n^m)
// space complexity: O(n^m)

function all_construct(target, words) {
    if (target === '') return [[]];

    let ret = [];
    for(let prefix of words) {
        if (target.startsWith(prefix)) {
            const newTarget = target.slice(prefix.length);
            const solutions = all_construct(newTarget, words);
            if (solutions !== null) {
                for(let s of solutions) {
                    ret.push([prefix, ...s]);
                }
            }
        }
    }
    return ret;
}

console.log(all_construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); // 4
console.log(all_construct('skateboard', ['sk', 'bo', 'rd', 'skat', 'board', 'ska', 'boar'])); // 0
console.log(all_construct('eeee', ['e', 'ee'])); // 5
console.log(all_construct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
