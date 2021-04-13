import { Product } from './../../../service/cart-lib.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() item: any;

  @Output() addProductEvent = new EventEmitter<Product>();

  constructor() {

  }

  addProduct(addItem: Product) {
    this.addProductEvent.emit(addItem);
  }
  check(item: Product){
    if(item.quantity > 0){
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {

  }

}


