function checkLeapYear(x) {
  if (x % 400 == 0 || (x % 4 == 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkLeapYear(1800));

// function calcDayOfMonth(month) {
//   switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//       return 31;
//     case 2:
//       return 29;
//     case 4: case 6: case 9:case 11:
//       return 30;
//     default:
//         console.log("123");
//   }
// }

// console.log(calcDayOfMonth(1));
