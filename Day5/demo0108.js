function t(name) {
  this.name = name;
}

function tt(name, age) {
  t.call(this, name)
  this.age = age;
}

function test(country, province) {
  console.info(`${this.name} - ${country} - ${province}`)
}

let o = new tt('nva', 15)
console.info(`${o.name} - ${o.age}`);

// test.call({"name": "abc"}, {"country"})