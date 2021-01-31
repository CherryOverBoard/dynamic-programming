// time complexity: O(m^n)
// space complexity: O(m^n)

const all_construct = (target, words) => {
    const arr = Array(target.length + 1).fill().map(() => []);
    arr[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        if (arr[i].length > 0) {
            for (let word of words) {
                if (target.substring(i).startsWith(word) && i + word.length <= target.length) {
                    const solutions = arr[i].map(subArray => [...subArray, word]);
                    arr[i + word.length].push(...solutions);
                    // == OR ==
                    // for (let solution of arr[i]) {
                    //     arr[i + word.length].push([...solution, word]);
                    // }
                }
            }
        }
    }

    return arr[target.length];
}

console.log(all_construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); // 4
console.log(all_construct('skateboard', ['sk', 'bo', 'rd', 'skat', 'board', 'ska', 'boar'])); // 0
console.log(all_construct('eeee', ['e', 'ee'])); // 5
console.log(all_construct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(all_construct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // this is expected to crash
