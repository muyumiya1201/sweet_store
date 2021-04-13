import { Router } from '@angular/router';
import { OrderInfoLibService } from './../service/order-info-lib.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout1',
  templateUrl: './checkout1.component.html',
  styleUrls: ['./checkout1.component.css']
})
export class Checkout1Component implements OnInit {

  imageUrl = 'assets/images'
  lastName = "";
  firstName = "";
  phone = "";
  city = "";
  area = "";
  address = "";

  constructor(private orderInfoLib: OrderInfoLibService, private router: Router) { }

  lastNameInput(event:any){
    console.log(event.target.value);
    this.lastName = event.target.value;
  }

  firstNameInput(event:any){
    console.log(event.target.value);
    this.firstName = event.target.value;
  }

  phoneInput(event:any){
    console.log(event.target.value);
    this.phone = event.target.value;
  }

  cityInput(event:any){
    console.log(event.target.value);
    this.city = event.target.value;
  }

  areaInput(event:any){
    console.log(event.target.value);
    this.area = event.target.value;
  }

  addressInput(event:any){
    console.log(event.target.value);
    this.address = event.target.value;
  }

  checkInput(){
    if(this.lastName == ""){
      alert("請填姓氏");
      return false;
    }
    if(this.firstName == ""){
      alert("請填名字");
      return false;
    }
    if(this.phone == ""){
      alert("請填電話");
      return false;
    }
    if(this.city == ""){
      alert("請選擇縣市");
      return false;
    }
    if(this.area == ""){
      alert("請選擇地區");
      return false;
    }
    if(this.address == ""){
      alert("請填地址");
      return false;
    }
    return true;
  }

  saveInfo(){
    if(!this.checkInput()){
      return;
    }
    var fullAddress = this.city + this.area + this.address;
    var fullName = this.lastName + this.firstName;
    this.orderInfoLib.setUserName(fullName);
    this.orderInfoLib.setPhone(this.phone);
    this.orderInfoLib.setAddress(fullAddress);
    this.router.navigate(["/checkout/checkout1"]);
  }


  ngOnInit(): void {
  }

}
