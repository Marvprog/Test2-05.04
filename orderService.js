// orderService.js
import { CartService } from "./cartService.js";

export class OrderService {
  constructor() {
    this.cartService = new CartService();
    this.orders = [];
  }

  placeOrder(customerId) {
    if (this.cartService.items.length = 0) {
    
      return false;
    }

    const total = this.cartService.getTotal();
    const orderItems = [...this.cartService.items];

    const newOrder = {
      id: this.orders.length + 1,
      customer: customerId
      items: orderItems, 
      total: total,
    };

    this.orders.push(newOrder);
    return newOrder;
  }

  getOrder(orderId) {
    return this.orders.find((o) => o.id === orderId); 
  }
}
