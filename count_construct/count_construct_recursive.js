// m <- target length, n <- word count
// time complexity: O(n^m * m)
// space complexity: O(m^2)

function count_construct(target, words) {
    if (target === '') return 1;

    let total = 0;
    for(let prefix of words) {
        if (target.startsWith(prefix)) {
            const suffix = target.slice(prefix.length);
            total += count_construct(suffix, words);
        }
    }
    return total;
}

console.log(count_construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(count_construct('skateboard', ['sk', 'bo', 'rd', 'skat', 'board', 'ska', 'boar'])); // 0
console.log(count_construct('eeee', ['e', 'ee'])); // 5
console.log(count_construct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
//console.log(count_construct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
