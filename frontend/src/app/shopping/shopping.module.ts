import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductCategoryComponent } from './components/products/product-category/product-category.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent },
      { path: 'order-success', component: OrderSuccessComponent },
    ])
  ],
  declarations: [
    ProductsComponent,
    ProductCategoryComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
    OrderSuccessComponent,
  ]
})
export class ShoppingModule { }
