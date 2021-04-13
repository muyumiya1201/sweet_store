import { CartLibService } from 'src/app/service/cart-lib.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  total = 0;
  shipping = 0;
  constructor(private cartLibService: CartLibService) { }

  totalPrice(){
    this.total = this.cartLibService.getTotalPrice();
  }

  getShipping(){
    this.shipping = this.cartLibService.getShipping();
  }
  ngOnInit(): void {
    this.getShipping();
    this.totalPrice();
  }

}
