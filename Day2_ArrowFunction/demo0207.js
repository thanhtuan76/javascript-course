function add(a, b) {
    return a + b;
}

function student(firstName, lastName) {
    this.fn = firstName;
    this.ln = lastName;

    this.fullName() = function () {
        return `${this.fn} ${this.ln}`;
    }
}

// let s1 = new student("A", "B");
// console.info(s1.fullName());


// Callback and deligate function demo
let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let dev = (a, b) => a / b;

function execute(func) {
    return func(20, 10);
}

// console.info(execute(sum));
// console.info(execute(sub));
// console.info(execute(mul));
// console.info(execute(dev));

// let add2 = (a, b) => a + b;

// console.info(add2(8, 9));

// let a = [5, 8, 5, 9, -9 , 4];

// console.info(a.map(value => value + 2));
// console.info(a.filter(value => value < 0 && value % 2 != 0))

// a.sort((t1, t2) => (t1 - t2))
// console.info(a)


// let date = document.getElementById("dateName");
let dateName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date();
let curDay = dateName[d.getDay()];

console.info(curDay)



// function showDate(n) {
//     let d = new Date();
//     let empty = [];
//     let a = d.getDate();
//     let m = d.getMonth() + 1;

//     for (let i = 0; i < 3; i++) {
//         empty.push(a);
//         a++;
//     }

//     return `${empty[n]}`
// }
// console.info(showDate(2));