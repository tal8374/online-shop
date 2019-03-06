import {Component, OnInit} from '@angular/core';
import {Category} from '../../../shared/models/category';
import {Product} from '../../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [
    {
      _id: '1',
      category: 'vegetables',
      image: 'http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg',
      price: 20,
      title: 'Spinach'
    },
    {
      _id: '2',
      category: 'bread',
      image: 'https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg',
      price: 30,
      title: 'Freshly Baked Bread'
    },
    {
      _id: '3',
      category: 'vegetables',
      image: 'https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg',
      price: 40,
      title: 'Tomato'
    },
    {
      _id: '4',
      category: 'vegetables',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Lettuce_Mini_Heads_%287331119710%29.jpg',
      price: 10,
      title: 'Lettuce'
    },
    {
      _id: '5',
      category: 'vegetables',
      image: 'http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg',
      price: 20,
      title: 'Spinach'
    },
    {
      _id: '6',
      category: 'bread',
      image: 'https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg',
      price: 30,
      title: 'Freshly Baked Bread'
    },
    {
      _id: '7',
      category: 'vegetables',
      image: 'https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg',
      price: 40,
      title: 'Tomato'
    },
    {
      _id: '8',
      category: 'vegetables',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Lettuce_Mini_Heads_%287331119710%29.jpg',
      price: 10,
      title: 'Lettuce'
    },
  ];

  filteredProducts: Array<Product> = this.products;

  category: Category;

  constructor() {
  }

  ngOnInit() {
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products.filter(product => product.category === this.category.name) : this.products;
  }

  private onCategoryChange(category: Category) {
    this.category = category;

    this.applyFilter();
  }

}
