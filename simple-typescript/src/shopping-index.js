"use strict";
exports.__esModule = true;
var shopping_cart_1 = require("./lib/shopping-cart");
var calculate_total_amount_1 = require("./lib/calculate-total-amount");
var order_1 = require("./lib/order");
var cart = new shopping_cart_1.ShoppingCart();
var orders = new order_1.Order();
console.log("The cart total is " + calculate_total_amount_1.calculateTotalAmount(cart));
console.log("The order total is " + calculate_total_amount_1.calculateTotalAmount(orders));
