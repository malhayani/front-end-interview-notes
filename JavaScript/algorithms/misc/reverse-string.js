const reverseString = (string, index = 0) => {
    let stringParts = string.split(' ');

    if (stringParts.length <= index) {
        return '';
    } else {
        let reversedString = '';

        for (let i = stringParts[index].length - 1; i >= 0; i--) {
            reversedString += stringParts[index][i];
        }
        stringParts[index] = reversedString;
        return stringParts.join(' ');
    }
}

console.log(reverseString('cat'));
console.log(reverseString('Cat and Dog', 2));
console.log(reverseString('Dogs and cats', 3));