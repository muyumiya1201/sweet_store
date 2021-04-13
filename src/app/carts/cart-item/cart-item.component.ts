import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartLibService, Product } from 'src/app/service/cart-lib.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item:any;
  @Output() quantityInCartChange = new EventEmitter();
  outOfQuantity = false;
  lessThanQuantity = false;

  constructor(private cartLibService: CartLibService) { }

  decrease(product: Product){
    if(product.quantityInCart <= 1){
      this.outOfQuantity = true;
    } else {
      this.cartLibService.decrease(product);
    }
    this.quantityInCartChange.emit(this.cartLibService.getTotalPrice());
  }

  increase(product: Product){
    if(product.quantityInCart >= product.quantity){
      this.outOfQuantity = true;
    } else {
      this.cartLibService.increase(product);
    }
    this.quantityInCartChange.emit(this.cartLibService.getTotalPrice());
  }

  deleteP(product: Product){
    this.cartLibService.delete(product);
    this.quantityInCartChange.emit(this.cartLibService.getTotalPrice());
  }

  ngOnInit(): void {
  }

}
