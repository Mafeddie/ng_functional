import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'; 
import {AddProductComponent} from './add-product/add-product.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import { MinicardComponent } from './minicard/minicard.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  {path:'add-product', component: AddProductComponent},
  {path : 'add-category', component:AddCategoryComponent },
  {path : 'minicard', component:MinicardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
