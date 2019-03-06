import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categories = [{_id: 1, name: 'vegetables'}, {_id: 2, name: 'bread'}];
  @Input('currentCategory') currentCategory;
  @Output() onCategoryChange: EventEmitter<any> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute) {
    this.setCurrentCategory();
  }

  ngOnInit() {
  }

  setCurrentCategory() {
    this.activatedRoute.queryParams.subscribe(params => {
      let categoryId = params['categoryId'];

      const filteredCategory = this.categories.filter(category => category._id == categoryId)

      if(filteredCategory.length === 1) {
        this.currentCategory = filteredCategory[0];
      } else {
        this.currentCategory = null;
      }

      this.onCategoryChange.emit(this.currentCategory);
    });
  }

  onChangeCategory(category) {
    this.setCurrentCategory();
  }



}
