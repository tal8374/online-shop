import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductQuantityComponent} from './components/product-quantity/product-quantity.component';

import { ShoppingCartService } from './services/shopping-cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
  ],
  providers: [
    ShoppingCartService
  ]
})
export class SharedModule {
}
