  
  import {ShoppingCart} from './lib/shopping-cart';
  import {calculateTotalAmount} from './lib/calculate-total-amount';
import {Order} from './lib/order';
  const cart=new ShoppingCart();
  const orders=new Order();
  console.log (`The cart total is ${calculateTotalAmount(cart)}`)
  console.log (`The order total is ${calculateTotalAmount(orders)}`)
