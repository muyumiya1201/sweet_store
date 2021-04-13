import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthLibService } from './auth-lib.service';

@Injectable({
  providedIn: 'root'
})
export class CartLibService {

  cartList: Product[] = [];
  private shipping = 0;
  fetchUrl = "http://localhost:8080/carts/order";

  constructor(private http: HttpClient, private authservice: AuthLibService) { }

  refresh() {
    localStorage.setItem("cart", JSON.stringify(this.cartList));

    // send to db to store the newest cart content
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers
    }
    var url = this.fetchUrl + "/" + this.authservice.getUtoken()  + "/tmp"
    this.http.post(url, JSON.stringify(this.cartList), options)
      .subscribe((res) => {
      });
  }

  add(product: Product) {
    if (!this.findProduct(product)) {
      product.quantityInCart = 1;
      this.cartList.push(product);
    } else {
      product.quantityInCart += 1;
    }
    this.refresh();
  }

  increase(product: Product) {
    this.cartList.forEach(element => {
      if (element.name == product.name) {
        element.quantityInCart += 1;
      }
    });
    this.refresh();
  }

  decrease(product: Product) {
    this.cartList.forEach(element => {
      if (element.name == product.name) {
        element.quantityInCart -= 1;
      }
    });
    this.refresh();
  }

  delete(product: Product) {
    this.cartList.forEach((element, index) => {
      if (element.name == product.name) {
        this.cartList.splice(index, 1);
      }
    });
    this.refresh();
  }

  findProduct(product: Product) {
    var flag = false;
    this.cartList.forEach(element => {
      if (element.name == product.name) {
        flag = true; // in cart
      }
    });
    return flag;
  }

  cartListInit() {
    this.cartList.length = 0;
  }

  getCartList() {
    if(localStorage.getItem("cart") != null){
      this.cartList = JSON.parse(localStorage.getItem("cart") || '{}');
    }
    return this.cartList;
  }

  getFormBack(){
    var utoken = sessionStorage.getItem("utoken");
    var url = this.fetchUrl + "/user/?utoken=" + utoken ;
    this.http.get<any>(url).subscribe((res) => {
      this.cartList = res;
    });
  }

  getShipping() {
    return this.shipping;
  }

  getTotalPrice() {
    this.getCartList();
    var total = 0;
    this.cartList.forEach(element => {
      total += element.price * element.quantityInCart;
    });
    if (total != 0) {
      this.shipping = 300;
    } else {
      this.shipping = 0;
    }
    return total;
  }

  cartEmpty() {
    if (this.cartList.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  tags: string;
  quantityInCart: number;
  picture: string;
}
