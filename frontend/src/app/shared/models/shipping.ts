export class Shipping {
  _id: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;

  constructor(init?: Partial<Shipping>) {
    Object.assign(this, init);
  }
}
