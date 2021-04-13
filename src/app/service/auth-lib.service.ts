import { CartLibService } from './cart-lib.service';
import { Injectable } from '@angular/core';
import { MessageLibService } from './message-lib.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  utoken:any
  constructor(private messageService: MessageLibService) { }

  getUtoken(){
    return this.utoken;
  }

  ownerLogin(){
    if(this.utoken == "5265c4146dd98acdc03b2a6eeb3da30e"){
      return true;
    } else {
      return false;
    }
  }
  userLogin(){
    var tokenInSession = sessionStorage.getItem("utoken");
    var tokenInLocal = localStorage.getItem("utoken");
    if(tokenInLocal != null){
      this.utoken = tokenInLocal;
      return true;
    } else if(tokenInSession != null){
      this.utoken = tokenInSession;
      return true;
    }else {
      return false;
    }
  }

  logOut(){
    this.messageService.logOut(this.utoken);
    this.utoken = null;
    localStorage.removeItem("cart");
    sessionStorage.removeItem("utoken");
    localStorage.removeItem("utoken");
  }
}
