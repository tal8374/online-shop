import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ProductCardComponent} from './components/product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ProductCardComponent,
  ],
  exports: [
    ProductCardComponent,
    CommonModule,
    FormsModule,
  ],
  providers: []
})
export class SharedModule {
}
