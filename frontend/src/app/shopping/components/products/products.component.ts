import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      category: 'vegetables',
      image: 'http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg',
      price: 20,
      title: 'Spinach'
    },
    {
      category: 'bread',
      image: 'https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg',
      price: 30,
      title: 'Freshly Baked Bread'
    },
    {
      category: 'vegetables',
      image: 'https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg',
      price: 40,
      title: 'Tomato'
    },
    {
      category: 'vegetables',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Lettuce_Mini_Heads_%287331119710%29.jpg',
      price: 10,
      title: 'Lettuce'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
