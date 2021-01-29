// time complexity: O(n * m)
// space complexity: O(n * m)

const grid_traveller = (n, m) => {
    // const tabulationArray = Array(n + 1);
    // for(let i = 0; i <= n; i++) {
    //     tabulationArray[i] = Array(m + 1).fill(0);
    // }

    // const tabulationArray = Array(n + 1).fill().map(() => Array(m + 1).fill(0));

    const tabulationArray = [...Array(n + 1)].map(e => Array(m + 1).fill(0));

    tabulationArray[1][1] = 1;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (j <= m) tabulationArray[i][j + 1] += tabulationArray[i][j];
            if (i <= n) tabulationArray[i + 1][j] += tabulationArray[i][j];
        }
    }

    return tabulationArray[n][m];
}

console.log(grid_traveller(1, 1));
console.log(grid_traveller(1, 2));
console.log(grid_traveller(2, 1));
console.log(grid_traveller(2, 2));
console.log(grid_traveller(2, 3));
console.log(grid_traveller(3, 2));
console.log(grid_traveller(3, 3));
console.log(grid_traveller(18, 18));