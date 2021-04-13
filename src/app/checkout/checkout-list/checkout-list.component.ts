import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.css']
})
export class CheckoutListComponent implements OnInit {

  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
