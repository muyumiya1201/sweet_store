import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartLibService, Product } from 'src/app/service/cart-lib.service';

@Component({
  selector: 'app-recommand-hot',
  templateUrl: './recommand-hot.component.html',
  styleUrls: ['./recommand-hot.component.css']
})
export class RecommandHotComponent implements OnInit {

  fetchUrl = "http://localhost:8080/products";
  itemList: any;

  constructor(private http: HttpClient, private cartLibService: CartLibService) { }

  getProduct(tag: String) {
    this.http.get<any>(this.fetchUrl +'/'+ tag).subscribe(res => {
      this.itemList = res;
    });
  }

  addIntoCart(item :Product){
    this.cartLibService.add(item);
  }

  ngOnInit(): void {
    this.getProduct("hot");
  }

}
