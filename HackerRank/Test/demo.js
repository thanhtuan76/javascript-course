// var arr = [];
// var a = [2];
// var b = [16, 32, 96];
// var mArr = [];
// var finalArr = [];

// for (let i = 4; i <= 16; i++) {
//     arr.push(i);
// }

// for (let i = 0; i < arr.length; i++) {
//     let bool = true;
//     for (let j = 0; bool && j < a.length; j++) {
//         if (arr[i] % a[j] != 0) {
//             bool = false;
//         }
//     }
//     // for (let k = 0; bool && k < b.length; k++) {
//     //     if (b[k] % arr[i] != 0) {
//     //         bool = false;
//     //     }
//     // }
//     if (bool) {
//         mArr.push(arr[i]);
//     }
//  }

// for (let i = 0; i < b.length; i++) {
//     for (let j = 0; j < mArr.length; j++) {
//         if (b[i] % mArr[j] != 0) {
//             mArr.splice(j, 1);
//         }
//     }
// }
// let validCount = 0;
//     for (let x = 1; x <= 100; x++) {
//         if (a.every(int => (x % int == 0))) {
//             if (b.every(int => (int % x == 0))) {
//                 validCount++;
//             }
//         }
//     }
// var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
// var min = scores[0];
// var max = scores[0];
// var countMax = 0,
//   countMin = 0;

// for (let i = 0; i < scores.length; i++) {
//   if (min < scores[i]) {
//     min = scores[i];
//     countMax++;
//   }
//   if (max > scores[i]) {
//     countMin++;
//     max = scores[i];
//   }
// }

// console.log(countMax + " " + countMin);

