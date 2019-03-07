import {ShoppingCart} from './shopping-cart';
import {Shipping} from './shipping';

export class Order {
  _id: string;
  userId: string;
  shoppingCar: ShoppingCart;
  shippingDetails: Shipping;

  constructor(userId: string, shoppingCar: ShoppingCart, shippingDetails: Shipping) {
    this.userId = userId;
    this.shoppingCar = shoppingCar;
    this.shippingDetails = shippingDetails;
  }
}
