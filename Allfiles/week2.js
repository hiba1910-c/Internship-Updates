// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
//             }
//         }
//     }
//     return arr;
// }

// let arr = [5, 2, 9, 1, 5, 6];

// console.log("Sorted Array:", bubbleSort(arr));






// function insertionSort(arr) {
//     let n = arr.length;
//     for (let i = 1; i < n; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//                  j--;
//         }
//         arr[j + 1] = key; 
//      }
//     return arr;
// }




// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let result = [], i = 0, j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) result.push(left[i++]);
//         else result.push(right[j++]);
//     }
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }





// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) return i; 
//     }
//     return -1; 
// }



// function binarySearch(arr, target) {
//     let left = 0, right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) return mid;
//         else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }

//     return -1; 
// }





    