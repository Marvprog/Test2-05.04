import { OrderService } from "./orderService.js";

const orderService = new OrderService();

orderService.cartService.addItem(1, 2);
orderService.cartService.addItem(2, 1);

const order = orderService.placeOrder("kunde123");

if (order) {
  console.log("Bestellung erfolgreich:");
  console.log(order);
} else {
  console.log("Der Warenkorb ist leer.");
}
