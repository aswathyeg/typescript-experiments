"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shopping_cart_1 = require("./lib/shopping-cart");
const calculate_total_amount_1 = require("./lib/calculate-total-amount");
const order_1 = require("./lib/order");
const cart = new shopping_cart_1.ShoppingCart();
const orders = new order_1.Order();
console.log(`The cart total is ${calculate_total_amount_1.calculateTotalAmount(cart)}`);
console.log(`The order total is ${calculate_total_amount_1.calculateTotalAmount(orders)}`);
