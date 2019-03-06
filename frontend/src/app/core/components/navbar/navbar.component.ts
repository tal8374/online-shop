import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../../shared/services/shopping-cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  getNumberOfItemsInCart(): number {
    return this.shoppingCartService.getNumberOfItemsInCart();
  }

}
