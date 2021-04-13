import { UserOrderComponent } from './user-order/user-order.component';
import { ProductTableComponent } from './product-manage/product-table/product-table.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { CartsComponent } from './carts/carts.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Checkout1Component } from './checkout1/checkout1.component';
import { Checkout2Component } from './checkout2/checkout2.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { CustomerOrderComponent } from './product-manage/customer-order/customer-order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent,
      children:[
        { path:'',component: ProductViewComponent},
        { path:':type',component:ProductViewComponent},
      ]
  },
  { path: 'login', component: RegisterComponent },
  { path: 'register', component:UserRegisterComponent},
  { path: 'carts', component: CartsComponent },
  { path: 'checkout', component: CheckoutComponent,
      children:[
        { path: '', component: Checkout1Component },
        { path: 'checkout1', component: Checkout2Component },
      ]
  },
  { path: 'success', component: SuccessComponent },
  { path: 'manage', component: ProductManageComponent,
      children:[
        { path: 'products', component: ProductTableComponent },
        { path: 'customer-order', component: CustomerOrderComponent },
  ]},
  { path: 'user-order', component: UserOrderComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
