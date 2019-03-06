import {ShoppingCart} from '../models/shopping-cart';
import {Product} from '../models/product';
import {Injectable} from '@angular/core';
import {ShoppingCartItem} from '../models/shopping-cart-item';

@Injectable()
export class ShoppingCartService {

  shoppingCart: ShoppingCart;

  constructor() {
    this.shoppingCart = new ShoppingCart();
  }

  getCart(): ShoppingCart {
    return this.shoppingCart;
  }

  addToCart(product: Product) {
    this.shoppingCart.addToShoppingCart(product);
  }

  removeFromCart(product: Product) {
    this.shoppingCart.removeFromShoppingCart(product);
  }

  clearCart(): void {
    this.shoppingCart.clearCart();
  }

  getNumberOfItemsInCart(): number {
    return this.shoppingCart.numberOfItemsInCart;
  }

  getShoppingCartItems(): { [_id: string]: ShoppingCartItem } {
    return this.shoppingCart.getShoppingCartItems();
  }

  getTotalPrice(): number {
    return this.shoppingCart.totalPrice;
  }

}
