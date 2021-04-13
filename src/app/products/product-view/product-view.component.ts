import { CartLibService, Product } from './../../service/cart-lib.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FetchLibService } from 'src/app/service/fetch-lib.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  fetchUrl = 'http://localhost:8080/products'
  itemList: Product[] = [];
  allList: Product[] = [];
  tagList = ['today', 'hot', 'new'];
  nowPage: any;

  constructor(private ActivatedRoute: ActivatedRoute, private cartLibService: CartLibService,
    private fetch: FetchLibService) { }

  getProduct(tag: String) {
    this.fetch.get(this.fetchUrl + '/' + tag).subscribe((res) =>{
      this.allList = res;
      this.itemList = this.getProductList(1);
    });
  }

  getProductList(page: number) {
    var start = (page - 1) * 4;
    return this.allList.slice(start, start + 4);
  }

  searchProduct(keyword: String) {
    var searchUrl = this.fetchUrl + '/search/' + keyword;

    this.fetch.get(searchUrl).subscribe(res => {
      this.itemList = res;
    });
  }

  addIntoCart(item: Product) {
    this.cartLibService.add(item);
  }

  showAnotherPage(page: number) {
    if (page <= 0 || page > (this.allList.length) / 4 + 1) {
      return;
    }
    this.nowPage = page;
    this.itemList = this.getProductList(page);
  }

  ngOnInit(): void {
    // get type of url
    this.ActivatedRoute.paramMap.subscribe(
      param => {
        var tag = param.get('type');
        if (tag == null) {
          this.getProduct("");
        } else if (this.tagList.indexOf(tag) < 0) {
          this.searchProduct(tag);
        } else {
          this.getProduct(tag);
        }
      }
    );
  }
}

