
function rotateLeft(arr, I) {
    let n = arr.length;
    for (let j = 0; j < I; j++) {
        let first = arr[0];
          for (let i = 0; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[n - 1] = first;
      }
    return arr;
}

console.log(rotateLeft([5,6,7,8,9], 2))