import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
