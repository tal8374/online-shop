import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { SharedModule } from './../shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductCategoryComponent } from './components/products/product-category/product-category.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
    ])
  ],
  declarations: [
    ProductsComponent,
    ProductCategoryComponent,
  ]
})
export class ShoppingModule { }
