import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchLibService } from '../service/fetch-lib.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  imageUrl = 'assets/images';

  fetchUrl = "http://localhost:8080/products";
  todayTotal = 0;
  hotTotal = 0;
  newTotal = 0;
  allTotal = 0;
  keyword = '';
  itemList = [];

  constructor(private fetch: FetchLibService, private router: Router) { }

  getProductTotal() {
    this.fetch.get(this.fetchUrl).subscribe(res => {
      this.allTotal = res.length;
      this.itemList = res;
    });
    this.fetch.get(this.fetchUrl + '/today').subscribe(res => {
      this.todayTotal = res.length;
    });
    this.fetch.get(this.fetchUrl + '/hot').subscribe(res => {
      this.hotTotal = res.length;
    });
    this.fetch.get(this.fetchUrl + '/new').subscribe(res => {
      this.newTotal = res.length;
    });
  }

  onKey(event:any) {
    const inputValue = event.target.value;
    this.keyword = inputValue;
  }

  search(keyword:any){
    this.router.navigate(['products/' + keyword], {state: {data: {keyword}}});
  }

  ngOnInit(): void {
    this.getProductTotal();
  }

}
