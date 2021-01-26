// m <- target length, n <- word count
// time complexity: O(n * m^2)
// space complexity: O(m^2)

function can_construct(target, words, memo = {}) {
    if (target in memo) return true;
    if (target === '') return true;

    for (let prefix of words) {
        if (target.startsWith(prefix)) {
            const newTarget = target.substring(prefix.length);
            if (can_construct(newTarget, words, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
    return false;
}

console.log(can_construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(can_construct('skateboard', ['sk', 'bo', 'rd', 'skat', 'board', 'ska', 'boar']));
console.log(can_construct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
