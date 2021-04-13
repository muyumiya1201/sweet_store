import { Router } from '@angular/router';
import { AuthLibService } from './../service/auth-lib.service';
import { Component, OnInit } from '@angular/core';
import { CartLibService } from '../service/cart-lib.service';


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  shipping = 0;
  total = 0;


  constructor(private cartLibService: CartLibService, private authLib: AuthLibService, private router: Router) { }

  totalPrice(total: any) {
    this.total = total;
  }

  userLogin(){
    if(!this.authLib.userLogin()){
      alert("請先登入");
      this.router.navigate(["/login"]);
    } else {
      if(this.cartLibService.cartEmpty()){
        alert("請新增品項到購物車");
        return;
      } else {
        this.router.navigate(["/checkout"]);
      }
    }
  }

  ngOnInit(): void {
    if(this.cartLibService.getCartList() != null){
      this.total = this.cartLibService.getTotalPrice();
      this.shipping = this.cartLibService.getShipping();
    }
  }

}
