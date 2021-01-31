// time complexity: O(n^2 * m)
// space complexity: O(n + m)

const can_construct = (target, words) => {
    const arr = Array(target.length + 1).fill(false);
    arr[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (arr[i]) {
            for (let word of words) {
                if (target.substring(i).startsWith(word) && i + word.length <= target.length) {
                    arr[i + word.length] = true;
                }
            }
        }
    }

    return arr[target.length];
}


console.log(can_construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(can_construct('skateboard', ['sk', 'bo', 'rd', 'skat', 'board', 'ska', 'boar']));
console.log(can_construct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));