import {Router} from '@angular/router';
import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Order} from '../../../shared/models/order';
import {OrderService} from '../../../shared/services/order.service';
import {ShoppingCartService} from '../../../shared/services/shopping-cart.service';
import {Shipping} from '../../../shared/models/shipping';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  shipping: Shipping = new Shipping();
  userId: string = '1';

  constructor(
    private router: Router,
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  placeOrder() {
    let order = new Order(this.userId, this.shoppingCartService.getCart(), this.shipping);
    console.log(order)
    this.orderService.placeOrder(order);
    this.router.navigate(['/order-success']);
  }
}
