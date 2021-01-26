// m <- target length, n <- words
// time complexity: O(n * m^2)
// space complexity: O(m^2)

function count_construct(target, words, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let total = 0;
    for(let prefix of words) {
        if (target.startsWith(prefix)) {
            const suffix = target.slice(prefix.length);
            total += count_construct(suffix, words, memo);
        }
    }
    memo[target] = total;
    return total;
}

console.log(count_construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(count_construct('skateboard', ['sk', 'bo', 'rd', 'skat', 'board', 'ska', 'boar'])); // 0
console.log(count_construct('eeee', ['e', 'ee'])); // 5
console.log(count_construct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(count_construct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
