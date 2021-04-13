import { MessageLibService } from './../../service/message-lib.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  orderList: any;
  fetchUrl = 'http://localhost:8080/carts';
  disablebutton = [false, false];
  color = ['', '#02DF82', '#FF9797'];
  response = ['', '已接受', '已拒絕']

  constructor(private http: HttpClient, private messageService: MessageLibService) { }

  getOrder() {
    this.http.get<any>(this.fetchUrl + '/order').subscribe(res => {
      this.orderList = res;
    });
  }

  setOrderStatus(orderId: any, status: number, index: number){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers
    }
    let url = this.fetchUrl + '/order/'+ orderId + "/status";
    this.http.post<any>(url, status, options).subscribe(res => {
      if(res == 1){
        this.disablebutton[index] = true;
        var message =  "老闆" + this.response[status] +"您的訂單";
        this.messageService.sendMessage(orderId, message);
        window.location.reload();
      }
      else {
      }
    });
  }
  ngOnInit(): void {
    this.getOrder();
  }

}
