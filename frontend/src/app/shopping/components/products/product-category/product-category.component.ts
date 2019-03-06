import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categories = [{_id: 1, name: 'vegetables'}, {_id: 2, name: 'bread'}];
  @Input('currentCategoryId') currentCategoryId;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.currentCategoryId);
    this.setCurrentCategory();
  }

  ngOnInit() {
  }

  setCurrentCategory() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentCategoryId = params['categoryId'];
    });
  }

  onChangeCategory() {
    this.setCurrentCategory();
  }

}
