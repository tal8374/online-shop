import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {ProductsComponent} from './shopping/components/products/products.component';
import {ShoppingModule} from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ShoppingModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
