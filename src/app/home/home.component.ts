import { MessageLibService } from './../service/message-lib.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartLibService, Product } from '../service/cart-lib.service';
import { AuthLibService } from '../service/auth-lib.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageUrl = 'assets/images';
  tag = "today";
  fetchUrl = "http://localhost:8080/products";
  itemList: any;
  public todayAct: boolean = true;
  public hotAct: boolean = false;
  public newAct: boolean = false;
  constructor(private http: HttpClient, private cartLibService: CartLibService,
    private messageService: MessageLibService, private authService: AuthLibService) { }

  getProduct(tag: String) {
    this.http.get<any>(this.fetchUrl + '/' + tag).subscribe(res => {
      this.itemList = res;
    });
  }
  addIntoCart(item: Product) {
    this.cartLibService.add(item);
  }

  initBoolean() {
    this.todayAct = false;
    this.hotAct = false;
    this.newAct = false
  }

  setTag(event: any) {
    var nowTag = event.target.id;
    this.tag = nowTag;
    if (nowTag == "today") {
      this.initBoolean();
      this.todayAct = true;
    } else if (nowTag == "hot") {
      this.initBoolean();
      this.hotAct = true;
    } else {
      this.initBoolean();
      this.newAct = true;
    }
    return this.tag;
  }

  ngOnInit(): void {
    this.getProduct(this.tag);
    var utoken = this.authService.getUtoken();
    if (utoken) {
      this.cartLibService.getFormBack();
      setTimeout(() => { this.messageService.register(utoken); }, 2000);
    }
  }
}
