// time complexity: O(n^2 * m)
// space complexity: O(n + m)

const count_construct = (target, words) => {
    const arr = Array(target.length + 1).fill(0);
    arr[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (arr[i] > 0) {
            for (let word of words) {
                if (target.substring(i).startsWith(word) && i + word.length <= target.length) {
                    arr[i + word.length] += arr[i];
                }
            }
        }
    }

    return arr[target.length];
}

console.log(count_construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(count_construct('skateboard', ['sk', 'bo', 'rd', 'skat', 'board', 'ska', 'boar'])); // 0
console.log(count_construct('eeee', ['e', 'ee'])); // 5
console.log(count_construct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(count_construct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
