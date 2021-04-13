
import { FetchLibService } from './../../service/fetch-lib.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/service/cart-lib.service';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements OnInit {
  fetchUrl = 'http://localhost:8080'
  fetchModifyUrl = "http://localhost:8080/products"
  itemList: any;
  checkoutForm;
  operation = '新增';
  showPicture: any;
  nowId: any;
  myFile: any
  tagList: any
  productTag: string[] = [];
  tmpTag: any

  constructor(private http: HttpClient, private formBuilder: FormBuilder,
    private modalService: NgbModal, private fetch: FetchLibService) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      price: '',
      quantity: '',
      tags: '',
    });
  }

  getProduct() {
    this.http.get<any>(this.fetchUrl + '/products').subscribe(res => {
      this.itemList = res;
    });
  }

  deleteP(product: Product) {
    if (confirm("確認刪除？")) {
      console.log(this.fetchUrl + '/products/delete/' + product.id);
      this.http.delete<any>(this.fetchUrl + '/products/delete/' + product.id)
        .subscribe(res => {
          alert("刪除成功");
          window.location.reload();
        });
    } else {
      alert("未執行刪除動作");
    }

  }

  update(product: Product, content: any) {
    this.checkoutForm = this.formBuilder.group({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      tags: product.tags,
    });
    this.operation = "修改";
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  updateP(productData: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers
    }
    console.log(productData);
    if (this.operation == "新增") {
      this.http.post<any>(this.fetchModifyUrl + '/new', JSON.stringify(productData), options)
        .subscribe((res) => {
          if (res) {
            alert("新增成功");
          } else {
            alert("新增失敗");
          }
        });
    } else {

      this.http.put(this.fetchModifyUrl + '/update/' + productData.id, JSON.stringify(productData), options)
        .subscribe((res) => {
          if (res) {
            alert("修改成功");
          } else {
            alert("修改失敗");
          }
        });
    }

    this.checkoutForm.reset();
  }

  /* ============== Open Model ==============*/
  openModal(content: any) {
    this.operation = "新增";
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  openPicture(content: any, productId: any) {
    this.showPicture = "http://localhost:8080/products/download/" + productId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-show-picture' });
  }

  openEditProductTag(content: any, productId: any) {
    this.nowId = productId;
    this.productTag = [];
    this.http.get('http://localhost:8080/tags').subscribe((res) => {
      this.tagList = res;
    });
    this.http.get('http://localhost:8080/' + productId + '/tag').subscribe((res: any) => {
      res.forEach((element: any) => {
        this.productTag.push(element[0]);
      });
    });
    this.modalService.open(content, { ariaLabelledBy: 'edit-product-tag' });
  }

  openEditTag(content: any) {
    this.http.get('http://localhost:8080/tags').subscribe((res) => {
      this.tagList = res;
    });
    this.modalService.open(content, { ariaLabelledBy: 'edit-tag' });
  }

  /* ============== Product Picture ==============*/
  upload(content: any, itemId: any) {
    this.nowId = itemId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-upload-picture' });
  }

  uploading(event: any) {
    this.myFile = event.target.files[0];
  }

  send() {
    if (this.myFile == null) {
      alert("請上傳圖片");
      return;
    }
    let upload = new FormData();
    upload.append('file', this.myFile, this.nowId + ".png");
    this.http.post('http://localhost:8080/products/upload', upload).subscribe((res) => {
      console.log(res);
      alert("已上傳");
      this.modalService.dismissAll();
    });
  }

  editProduct(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'edit-product' });
  }

  /* ============== Product Tag ==============*/
  checkProductTag(event: any) {
    let value = event.target.value
    let status = event.target.checked
    if (status == true) {
      this.productTag.push(value);
    } else {
      let index = this.productTag.indexOf(value);
      if (index > -1) {
        this.productTag.splice(index, 1);
      }
    }
  }

  setProductTag() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers
    }
    let fetch = "http://localhost:8080/" + this.nowId + "/tag"
    this.http.post(fetch, this.productTag, options).subscribe((res) => {
      if (res == 1)
        alert("修改成功");
      else
        alert("修改失敗");
      this.modalService.dismissAll();
    });
  }

  hasTag(tag: any) {
    let flag = false;
    this.productTag.forEach((element: any) => {
      if (element == tag) {
        flag = true;
      }
    });
    return flag;
  }

  /* ============== Tag ==============*/

  newTag(tag: any) {
    this.fetch.post("http://localhost:8080/tags/new", tag).subscribe((res) => {
      if (res == 1)
        alert("新增成功");
      else
        alert("新增失敗");
      this.tmpTag = "";
      this.modalService.dismissAll();
    });
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    this.tmpTag = inputValue;
  }

  updateTag(oldTag: string, newTag: any) {
    let tagArr = [oldTag[0], newTag];
    console.log(tagArr);
    this.fetch.post("http://localhost:8080/tags/update", tagArr).subscribe((res) => {
      if (res == 1)
        alert("修改成功");
      else
        alert("修改失敗");
      this.modalService.dismissAll();
    });
  }

  deleteTag(tag: any) {
    if (confirm("確認刪除？")) {
      this.fetch.post("http://localhost:8080/tags/delete", tag).subscribe((res) => {
        if (res == 1)
          alert("刪除成功");
        else
          alert("刪除失敗");
        this.modalService.dismissAll();
      });
    } else {
      alert("未執行刪除動作");
    }
  }

  ngOnInit(): void {
    this.getProduct();
  }

}
