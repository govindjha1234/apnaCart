import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent as SignupComponent } from './singup/singup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'payment',component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
