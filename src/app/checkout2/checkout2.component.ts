import { OrderInfoLibService } from './../service/order-info-lib.service';
import { Router } from '@angular/router';
import { CartLibService } from 'src/app/service/cart-lib.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.css']
})
export class Checkout2Component implements OnInit {

  fetchUrl = "http://localhost:8080/carts/order/store";
  email = "";
  taxIDNumber = "";
  constructor(private http: HttpClient, private cartListService: CartLibService, private router: Router, private orderInfoLib: OrderInfoLibService) { }


  emailInput(event: any) {
    console.log(event.target.value);
    this.email = event.target.value;
  }
  taxIDNumberInput(event: any) {
    console.log(event.target.value);
    this.taxIDNumber = event.target.value;
  }

  postCart() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers
    }

    console.log(this.makeCartOrder());

    this.http.post(this.fetchUrl, this.makeCartOrder(), options)
      .subscribe((res) => {
        if (res == 1) {
          localStorage.removeItem("cart");
          this.cartListService.cartListInit();
          this.router.navigateByUrl("/success");
        } else {
          alert("下單失敗 請重新下單");
          this.router.navigateByUrl("/");
        }
      });
  }

  getDate() {
    return formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss', 'en');
  }

  makeCartOrder() {
    var total = this.cartListService.getTotalPrice() + this.cartListService.getShipping();
    const postOrder = {
      utoken: sessionStorage.getItem("utoken"),
      name: this.orderInfoLib.getUserName(),
      address: this.orderInfoLib.getAddress(),
      phone: this.orderInfoLib.getPhone(),
      taxIDNumber: this.taxIDNumber,
      email: this.email,
      orderTime: this.getDate(),
      orderContent: this.cartListService.getCartList(),
      status: 0,
      total: total
    };

    return postOrder;
  }

  ngOnInit(): void {
  }

}
