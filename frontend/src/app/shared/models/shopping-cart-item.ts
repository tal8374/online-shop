export class ShoppingCartItem {
  _id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;

  constructor(init?: Partial<ShoppingCartItem>) {
    this.quantity = 0;
    Object.assign(this, init);
  }

  get totalPrice() { return this.price * this.quantity; }
}
