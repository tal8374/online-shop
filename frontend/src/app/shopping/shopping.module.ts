import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
    ])
  ],
  declarations: [
    ProductsComponent,
  ]
})
export class ShoppingModule { }
