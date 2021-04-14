import { Injectable } from '@angular/core';
import * as SockJS from "sockjs-client";
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class MessageLibService {

  constructor() {
    this.initializeWebSocketConnection();
  }

  public stompClient!: { connect: (arg0: {}, arg1: (frame: any) => void) => void; subscribe: (arg0: string, arg1: (message: any) => void) => void; send: (arg0: string, arg1: {}, arg2: any) => void; };

  initializeWebSocketConnection() {
    const serverUrl = 'https://localhost:8080/socket';
    const socket = new SockJS(serverUrl);
    this.stompClient = Stomp.over(socket);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, (frame) => {
      that.stompClient.subscribe('/user/message', function (msgOut) {
        console.log(msgOut.body);
        var n = new Notification("來自SWEET的訂單通知！", {
          body: msgOut.body
        });
      });
    });

  }

  sendMessage(orderId: string, message: string) {
    var data = {
      "orderId": orderId,
      "message": message
    };
    var stringMessage = JSON.stringify(data);
    this.stompClient.send('/app/send/message', {}, stringMessage);
  }

  register(utoken: any) {
    var message = {
      "utoken": utoken,
    };
    var stringMessage = JSON.stringify(message);
    this.stompClient.send("/app/register", {}, stringMessage);
  }

  logOut(utoken: any){
    var message = {
      "utoken": utoken,
    };
    var stringMessage = JSON.stringify(message);
    this.stompClient.send("/app/logout", {}, stringMessage);
  }
}
