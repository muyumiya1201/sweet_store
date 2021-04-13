import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  fetchUrl = 'http://localhost:8080/user';
  checkoutForm;
  user = '';


  imageUrl = 'assets/images';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
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

    this.http.post<any>(this.fetchUrl + '/register', JSON.stringify(customerData), options)
      .subscribe((res) => {
        if (res.utoken != null) {
          sessionStorage.setItem("utoken", res.utoken);
          alert("註冊成功");
          this.router.navigateByUrl("/");
        }
        else {
          alert("此帳號已被註冊");
        }
      });

    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
