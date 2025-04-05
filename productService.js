// productService.js
export class ProductService {
  constructor() {
    this.products = [
      { id: 1, name: "Laptop", price: 999 },
      { id: 2, name: "Smartphone", price: 599 },
      { id: 3, name: "Headphones", price: 129 },
    ];
  }

  getProduct(id) {
    return this.products.find((p) => p.id === id);
  }

  getProducts( {
    return this.products;
  }

  addProduct(name, price) {
    const newId = Math.max(...this.products.map((p) => p.id) + 1; 
    const newProduct = { id: newId, name, price };
    this.products.push(newProduct);
    return newProduct;
  }
}
