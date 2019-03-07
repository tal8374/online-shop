import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Component, Input } from '@angular/core';
import {ShoppingCartService} from '../../../shared/services/shopping-cart.service';
import {Product} from '../../../shared/models/product';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent  {
  constructor(private shoppingCartService: ShoppingCartService) {

  }

  getShoppingCartItems(): Array<Product> {
    const shoppingCartItems = this.shoppingCartService.getShoppingCartItems();
    const shoppingCartItemsArray: Array<Product> = [];

    for (let itemId in shoppingCartItems) {
      shoppingCartItemsArray.push(new Product({_id: itemId, ...shoppingCartItems[itemId]}));
    }

    console.log(shoppingCartItemsArray)

    return shoppingCartItemsArray;
  }

  getNumberOfItemsInCart(): number {
    return this.shoppingCartService.getNumberOfItemsInCart();
  }

  getTotalPrice(): number {
    return this.shoppingCartService.getTotalPrice();
  }

  getNumberOfOccurenceOfProduct(product: Product): number {
    return this.shoppingCartService.getNumberOfOccurrenceOfProduct(product);
  }

}
