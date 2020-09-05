// a = [7, 4, 5, 6, 3, 3]
// console.info(a.filter(value => a.indexOf(value) == a.lastIndexOf(value)))

// let s = "hello"
// let d = [];
// for (let i = 0; i < s.length; i++){
//     // cach 1 if (d.hasOwnProperty(s[i])) // s[i] in d
//     if (s[i] in d) // cach 2
//         d[s[i]]++;
//     else 
//         d[s[i]] = 1;
// }

// console.info(d);

// Check leap year
// Date.prototype.isLeap = function(){
//     let y = this.getFullYear();
//     return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0); 
// }
// let d = new Date();
// console.info(d.isLeap());

// Check prime number
// Number.prototype.isPrime = function(){
//     let n = this.valueOf();
//     if (n < 2)
//         return false;

//     for (let i = 2; i <= Math.sqrt(n); i++){
//         if (n % i == 0)
//             return false;
//     }
//     return true;
// }
// let d = new Number(4);
// console.info(d.isPrime());

// Count words
String.prototype.countWords = function(){
    let w = this.valueOf();
    let count = 0;
    return w.trim().split(/\s+/).length;
    // for (let i = 0; i < w.length; i++)
    // if (i === " ") { // if a space is found in str
    //   count = +1; // add 1 to count
    // }
}

let d = "      Bui   Thanh     Tuan";
console.info(d.countWords());

// Vào w3school -> javascript xem biểu thức chính quy