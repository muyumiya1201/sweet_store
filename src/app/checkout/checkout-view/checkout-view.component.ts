import { CartLibService, Product } from 'src/app/service/cart-lib.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.css']
})
export class CheckoutViewComponent implements OnInit {

  checkoutList: Product[] = [];
  constructor(private cartLibService: CartLibService) { }


  ngOnInit(): void {
    this.checkoutList = this.cartLibService.getCartList();
  }

}
