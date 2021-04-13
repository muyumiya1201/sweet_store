import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent implements OnInit {

  fetchUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient, private router: Router) {
   }

   signOut(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("utoken");
    this.router.navigateByUrl("/");
   }

   check(){
    let headers = new HttpHeaders({
      'Content-Type': 'text/plain'
    });
    let options = {
      headers
    }

    var uToken = sessionStorage.getItem("utoken");
    this.http.post<any>(this.fetchUrl + '/check/' + uToken, null , options)
    .subscribe((res) => {
      if (res == 0) {
        alert("非管理人員請勿亂來");
        this.router.navigate(['..']);
      }
      else {
      }
    });
   }

  ngOnInit(): void {
    // this.check();
  }

}
