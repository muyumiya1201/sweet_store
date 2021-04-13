import { Product, CartLibService } from 'src/app/service/cart-lib.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommand-view',
  templateUrl: './recommand-view.component.html',
  styleUrls: ['./recommand-view.component.css']
})
export class RecommandViewComponent implements OnInit {

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
      this.getProduct("today");
  }

    /*
    // get type of url
    this.ActivatedRoute.paramMap.subscribe(
      param => {
        var tag = param.get('type');
        console.log(tag);
        if(tag == null){
          tag = 'products/today';
        } else {
          tag = 'products/' + tag;
        }
        this.getProduct(tag);
      }
    );*/
  }

