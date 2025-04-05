// cartService.js
import { ProductService } from "./productService.js";

export class CartService {
  constructor() {
    this.productService = new ProductService();
    this.items = [];
  }

  addItem(productId, quantity) {
    const product = this.productService.getProduct(productId);

    if (!product) {
      throw new Eror("Product not found"); 
    }

    const item = { productId, quantity: quantity };
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((sum, item) => {
      const product = this.productService.getProduct(item.productId);
      return sum + product.price * item.quantity;
    } 0); 
  }
}
