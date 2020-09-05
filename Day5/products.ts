class Product {
  name: string
  price: number

  constructor(n:string, p:number) {
    this.name = n;
    this.price = p;
  }

  compareByPrice(p:Product):number {
    let p1 = this.price;
    let p2 = p.price;

    return p1 > p2 ? 1:(p1 < p2 ?-1:0);
  }

  show():void {
    console.info(`Name: ${this.name}; Price: ${this.price}`)
  }
}

class ProductManager {
  private products:Product[] = []

  addProduct(p:Product):void {
    this.products.push(p)
  }

  show():void {
    this.products.forEach(p => p.show())
    // for (let i = 0; i < this.products.length; i++)
    // this.products[i].show();
  }

  searchByName(kw:string):Product[] {
    return this.products.filter(p => p.name.toLowerCase().indexOf(kw.toLowerCase()) >= 0)
  }

  searchByPrice(fromPrice:number=0, toPrice:number=10):Product[] {
    return this.products.filter(p => p.price >= fromPrice && p.price <= toPrice);
  }

  sortByPrice():void {
    this.products.sort((p1:Product, p2:Product) => p1.compareByPrice(p2))
  }
}

var p1 = new Product("Salad", 20);
// p1.show();
var p2 = new Product("Candy", 10);
// p2.show();

var ls = new ProductManager()
ls.addProduct(p1)
ls.addProduct(p2)
console.info("==== SHOW ALL PRODUCTS ====")
ls.show();

console.info("==== SEARCH BY NAME ====")
ls.searchByName("SA").forEach(p => p.show());

console.info("==== SEARCH BY PRICE ====")
ls.searchByPrice(10, 20).forEach(p => p.show());

console.info("==== SORT BY PRICE ====")
ls.sortByPrice()
ls.show()
