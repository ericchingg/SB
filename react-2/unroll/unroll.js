function unroll(squareArray, arr=[]) {
    if (squareArray.length === 0) {
        return arr;
    }

    // Top row
    arr = arr.concat(squareArray.shift());

    // Right column
    for (let j = 0; j < squareArray.length; j++) {
        arr.push(squareArray[j].pop());
    }

    // Bottom row
    if (squareArray.length > 0) {
        arr = arr.concat(squareArray.pop().reverse());
    }

    // Left column
    for (let l = squareArray.length - 1; l >= 0; l--) {
        arr.push(squareArray[l].shift());
    }

    // Recursive call
    return unroll(squareArray, arr);
}

module.exports = unroll;
