import { CartLibService, Product } from './../../service/cart-lib.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  @Output() passEvent = new EventEmitter();
  cartList: Product[] = [];
  total = 0;
  constructor(private cartLibService: CartLibService) { }

  passToParent(total:any){
    this.cartList = this.cartLibService.getCartList();
    this.passEvent.emit(total);

  }
  ngOnInit(): void {
    this.cartList = this.cartLibService.getCartList();
  }
}
