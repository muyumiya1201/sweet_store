import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/service/cart-lib.service';
/*
@Component({
  selector: 'app-new-modal',
  styleUrls: ['./new-modal.component.css'],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello!weeee</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark">Close</button>
    </div>
  `
})*/


@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.css']
})
export class NewModalComponent implements OnInit {

  fetchUrl = "http://localhost:8080/products"
  checkoutForm;
  product: any;
  operation = 'new';
  fileToUpload: any;
  picture: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, public activeModal: NgbActiveModal) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      price: '',
      quantity: '',
      tags: '',
      picture:'https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1204e5551548223af82981f0025984ef&auto=format&fit=crop&w=634&q=80'
    });
  }
  updateP(productData: any) {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers
    }
    console.log(productData);
    if (this.operation == "new") {
      this.http.post<any>(this.fetchUrl + '/new', JSON.stringify(productData), options)
        .subscribe((res) => {
          if (res) {
            alert("新增成功");
            this.router.navigateByUrl("/product-manage");
          } else {
            alert("新增失敗");
          }
        });
    } else {

      this.http.put(this.fetchUrl + '/update/' + productData.id, JSON.stringify(productData), options)
        .subscribe((res) => {
          if (res) {
            alert("修改成功");
            this.router.navigateByUrl("/product-manage");
          } else {
            alert("修改失敗");
          }
        });
    }

    this.checkoutForm.reset();
  }

  setPicture(form:any){
    console.log(form);
  }


  dataIntoForm(product: Product) {
    console.log("數量： " + product.quantity);
    this.checkoutForm = this.formBuilder.group({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      tags: product.tags,
      picture: "https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1204e5551548223af82981f0025984ef&auto=format&fit=crop&w=634&q=80"
    });
  }



  ngOnInit(): void {
    console.log(history.state.data.product);
    this.product = history.state.data.product;
    if (this.product != null) {
      this.operation = "update";
      this.dataIntoForm(this.product);
    }
  }

}
