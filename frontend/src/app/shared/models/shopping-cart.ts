import {Product} from './product';
import {ShoppingCartItem} from './shopping-cart-item';

export class ShoppingCart {
  shoppingCart: { [_id: string]: ShoppingCartItem } = {};

  constructor(private products: Array<Product> = []) {
    for (let product of products) {
      this.shoppingCart[product._id] = new ShoppingCartItem(product);
    }
  }

  getQuantity(product: Product) {
    let item: ShoppingCartItem = this.shoppingCart[product._id];
    return item ? item.quantity : 0;
  }

  get totalPrice() {
    let sum = 0;
    for (let productId in this.shoppingCart) {
      sum += this.shoppingCart[productId].totalPrice;
    }
    return sum;
  }

  get numberOfItemsInCart() {
    let count = 0;
    for (let shoppingCartId in this.shoppingCart) {
      count += this.shoppingCart[shoppingCartId].quantity;
    }
    return count;
  }

  addToShoppingCart(product: Product) {
    this.updateShoppingCartItem(product, 1);
  }

  removeFromShoppingCart(product: Product) {
    this.updateShoppingCartItem(product, -1);
  }

  getShoppingCartItem(productId: string): ShoppingCartItem {
    return this.shoppingCart[productId];
  }

  updateShoppingCartItem(product: Product, quantity: number) {
    if(!this.shoppingCart[product._id]) {
      this.shoppingCart[product._id] = new ShoppingCartItem(product);
    }

    this.shoppingCart[product._id].quantity += quantity;
  }

  clearCart() {
    this.shoppingCart = {};
  }
}
