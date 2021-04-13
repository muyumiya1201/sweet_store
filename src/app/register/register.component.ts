import { MessageLibService } from './../service/message-lib.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fetchUrl = 'http://localhost:8080/user';
  checkoutForm;
  remember = false;

  imageUrl = 'assets/images';
  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router, private messageService: MessageLibService) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  submitForm(customerData: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers
    }

    this.http.post<any>(this.fetchUrl + '/login', JSON.stringify(customerData), options)
      .subscribe((res) => {
        if (res.utoken != null) {
          if(this.remember == true){
            localStorage.setItem("utoken", res.utoken);
          } else {
            sessionStorage.setItem("utoken", res.utoken);
          }
          alert("登入成功");
          Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
              console.log('使用者允許通知');
            } else if (permission === 'denied') {
              console.log('使用者拒絕通知');
            }
          });
          setTimeout(() => { this.messageService.register(res.utoken); }, 2000);
          this.router.navigateByUrl("/");
        }
        else {
          alert("帳號或密碼錯誤");
        }
      });

    this.checkoutForm.reset();
  }

  ngOnInit(): void {

  }


}
