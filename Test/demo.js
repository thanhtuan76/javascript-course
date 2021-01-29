// function countDuplicate(arr) {
//   let result = {},
//     a = arr,
//     count = 0;
//   for (var i = 0; i < arr.length; i++)
//     if (!result[a[i]]) {
//       result[a[i]] = 1;
//     } else {
//       result[a[i]]++;
//     }
//   for (let a in result) {
//     if (result[a] > 1) count++;
//   }
//   console.info(result);
//   console.log(Object.keys(result[0]));
//   return count;
// }
// arr = [1, 1, 3, 3, 4, 4, 5, 5, 4, 1];
// console.info(countDuplicate(arr));
// ===========================================================
let arr = [5, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
let arrValue = {};
let max = 0;
let index = 0;

for (let i = 0; i < arr.length; i++) {
  if (!arrValue[arr[i]]) {
    arrValue[arr[i]] = 1;
  }
  else {
    arrValue[arr[i]]++;
  }
}
for (let a in arrValue) {
  if (arrValue[a] > max) {
    max = arrValue[a];
    index = a;
  }
}
console.log(index);

// function compareTriplets(a, b) {
//     // var arr = []
//     var ares = 0
//     var bres = 0

//     for (let i in a) {
//         if (a[i] > b[i])
//             ares++
//         else if (a[i] < b[i])
//             bres++
//     }
//     return ares + " " + bres
// }
// var a = [2, 2, 5]
// var b = [1, 1, 4]
// console.info(compareTriplets(a, b))

// var arr = [
//   {
//     name: 'Bui Thanh Tuan',
//     age: 21,
//     phone: 1234569
//   },
//   {
//     name: 'Vo Thi Thanh Kieu',
//     age: 21,
//     phone: 1234567
//   },
//   {
//     name: 'Do Thien Phuoc',
//     age: 21,
//     phone: 1234568
//   },
//   {
//     name: 'Nguyen Cong Quang Minh',
//     age: 21,
//     phone: 1234566
//   }
// ]

// // var arr = JSON.parse()
// localStorage.setItem('arr', JSON.stringify(arr))

// var arr = JSON.parse(localStorage.getItem('arr'))
// localStorage.removeItem('arr')
// localStorage.clear()

// console.log(arr)

// var b = []
// var a = []
// var arr = []
// arr[0] = [1, 2, 3]
// arr[1] = [4, 5, 6]
// arr[2] = [7, 8, 9]

// function sum (a, b) {
//   return a + b
// }

// for (let i = 0; i < arr.length; i++){
//   a.push(arr[i][arr.length - i - 1])
//   // b.push(arr[i][i])
// }

// console.info(Math)

// var human = [
//   {
//     name: 'Tuan',
//     age: 21,
//     gender: 'male'
//   },

//   {
//     name: 'Kieu',
//     age: 21,
//     gender: 'female'
//   },

//   {
//     name: 'Minh',
//     age: 21,
//     gender: 'male'
//   }
// ]

// localStorage.setItem('human', JSON.stringify(human))

// // var human = JSON.parse(localStorage.getItem('human'))
// localStorage.getItem('human')

// localStorage.setItem('name', 'AAA')
// console.log(human)

// var people = [
//   {
//     name: "tuan",
//     age: "21",
//     gender: "male",
//   },
//   {
//     name: "kieu",
//     age: "21",
//     gender: "female",
//   },
//   {
//     name: "phuoc",
//     age: "21",
//     gender: "male",
//   },
// ];

// localStorage.setItem('people', JSON.stringify(people))
// localStorage.removeItem('people')
// sessionStorage.setItem("people", JSON.stringify(people));
