function findFloor(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {

    let middle = Math.floor(left + right) / 2;

    if(arr[middle] === val) {
      return arr[middle];
    } else if (arr[middle] > val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  if (right >= 0) {
    return arr[right]
  } 
  else {
    return -1
  }
}

module.exports = findFloor