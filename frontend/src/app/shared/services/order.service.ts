import {ShoppingCartService} from './shopping-cart.service';
import {Injectable} from '@angular/core';
import {Order} from '../models/order';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  placeOrder(order: Order) {
    this.shoppingCartService.clearCart();
  }

  getOrders(): Array<Order> {
    return [];
  }

  getOrdersByUser(userId: string): Array<Order> {
    return [];
  }
}
