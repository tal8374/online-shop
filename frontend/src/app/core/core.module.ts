import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
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
