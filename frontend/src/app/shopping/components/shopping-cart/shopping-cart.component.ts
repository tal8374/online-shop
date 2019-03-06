import {ShoppingCartService} from '../../../shared/services/shopping-cart.service';
import {Component, OnInit} from '@angular/core';
import {ShoppingCartItem} from '../../../shared/models/shopping-cart-item';
import {Product} from '../../../shared/models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: Array<Product>;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.setItems();
  }

  ngOnInit() {
  }

  clearCart() {
    this.shoppingCartService.clearCart();
    this.setItems();
  }

  setItems() {
    this.items = this.getShoppingCartItems();
  }

  getShoppingCartItems(): Array<Product> {
    const shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
    const shoppingCartItemsArray: Array<Product> = [];

    for (let itemId in shoppingCartItems) {
      shoppingCartItemsArray.push(new Product({_id: itemId, ...shoppingCartItems[itemId]}));
    }

    return shoppingCartItemsArray;
  }

  getTotalPrice(): number {
    return this.shoppingCartService.getTotalPrice();
  }

  getNumberOfItemsInCart(): number {
    return this.shoppingCartService.getNumberOfItemsInCart();
  }

  getTotalPriceOfItem(product: Product): number {
    return this.shoppingCartService.getTotalPriceOfItem(product);
  }
}
