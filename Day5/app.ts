function hello(name:string|number, t:any) {
  console.info(`Hello ${name}`)
}

hello("Tuan", "abc");
hello(4545, true)

// Array typescript chứa các phần tử có cùng dữ liệu - Mảng js ngược lại
// Tuples typescript là mảng chứa các phần tử có kiểu dữ liệu khác nhau