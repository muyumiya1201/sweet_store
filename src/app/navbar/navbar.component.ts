import { AuthLibService } from './../service/auth-lib.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imageUrl = 'assets/images';
  userStatus = "登入";
  constructor(private router: Router, private authLib: AuthLibService) { }

  ownerLogin(){
    return this.authLib.ownerLogin();
  }
  userLogin(){
    return this.authLib.userLogin();
  }
  logOut(){
    this.authLib.logOut();
  }
  ngOnInit(): void {
  }

}
