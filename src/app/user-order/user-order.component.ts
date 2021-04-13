import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  orderList:any;
  fetchUrl = "http://localhost:8080/carts/order/";
  color = ['', '#02DF82', '#FF9797'];

  constructor(private http: HttpClient) { }

  getUserOrder(){
    var user = sessionStorage.getItem("utoken");
    this.http.get(this.fetchUrl + user).subscribe(res => {
      this.orderList = res;
    });
  }

  showStatus(status: number){
    if(status == 0){
      return "未回應";
    } else if(status == 1){
      return "已接受";
    } else {
      return "已拒絕";
    }
  }

  ngOnInit(): void {
    this.getUserOrder();
  }

}
