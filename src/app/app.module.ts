import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartsComponent } from './carts/carts.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout1Component } from './checkout1/checkout1.component';
import { Checkout2Component } from './checkout2/checkout2.component';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { ProductItemComponent } from './products/product-view/product-item/product-item.component';
import { RecommandViewComponent } from './home/recommand-view/recommand-view.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartViewComponent } from './carts/cart-view/cart-view.component';
import { CartItemComponent } from './carts/cart-item/cart-item.component';
import { CheckoutListComponent } from './checkout/checkout-list/checkout-list.component';
import { CheckoutViewComponent } from './checkout/checkout-view/checkout-view.component';
import { ProductTableComponent } from './product-manage/product-table/product-table.component';
import { NewModalComponent } from './product-manage/new-modal/new-modal.component';
import { RecommandNewComponent } from './home/recommand-new/recommand-new.component';
import { RecommandHotComponent } from './home/recommand-hot/recommand-hot.component';
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { UserLoginComponent } from './register/user-login/user-login.component';
import { CustomerOrderComponent } from './product-manage/customer-order/customer-order.component';
import { PrintOrderComponent } from './product-manage/customer-order/print-order/print-order.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    CartsComponent,
    RegisterComponent,
    CheckoutComponent,
    Checkout1Component,
    Checkout2Component,
    SuccessComponent,
    HomeComponent,
    ProductViewComponent,
    ProductItemComponent,
    RecommandViewComponent,
    RecommandNewComponent,
    RecommandHotComponent,
    ProductManageComponent,
    CartViewComponent,
    CartItemComponent,
    CheckoutListComponent,
    CheckoutViewComponent,
    ProductTableComponent,
    NewModalComponent,
    UserRegisterComponent,
    UserLoginComponent,
    CustomerOrderComponent,
    PrintOrderComponent,
    UserOrderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
