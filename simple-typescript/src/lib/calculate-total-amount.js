"use strict";
exports.__esModule = true;
function calculateTotalAmount(order) {
    var total = order.calculateTotal();
    var discount = total * .1;
    total -= discount;
    var tax = total * .2;
    total += tax;
    return total;
}
exports.calculateTotalAmount = calculateTotalAmount;
