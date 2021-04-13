import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderInfoLibService {

  private userName = "";
  private phone = "";
  private address = "";
  private email = "";
  private taxIDNumber = "";

  constructor() { }

  setUserName(userName: string){
    this.userName = userName;
  }
  getUserName(){
    return this.userName;
  }
  setPhone(phone: string){
    this.phone = phone;
  }
  getPhone(){
    return this.phone;
  }
  setAddress(address: string){
    this.address = address;
  }
  getAddress(){
    return this.address;
  }
  setEmail(email: string){
    this.email = email;
  }
  getEmail(){
    return this.email;
  }
  setTaxIDNumber(taxIDNumber: string){
    this.taxIDNumber = taxIDNumber;
  }
  getTaxIDNumber(){
    return this.taxIDNumber;
  }

}
