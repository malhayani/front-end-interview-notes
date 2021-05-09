// Count how many times a substring appears within a string
const naiveSearch = (string, substring) => {
    let i = 0;
    let j = 0;
    let count = 0;
    while ((i + j) < string.length) {
        if (string[i + j] === substring[j]) {
            if (j === substring.length - 1) {
                count++;
                j = 0;
                i++;
            } else {
                j++;
            }
        } else {
            i++;
            j = 0;
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled and then loled again", "lol"));