import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'; 
import {AddProductComponent} from './add-product/add-product.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import { MinicardComponent } from './minicard/minicard.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [

  {path: '' , 
  redirectTo : 'login ',
  pathMatch : 'full'
   },
  { path: 'login', component: LoginComponent},
  {path : 'nav', component : NavComponent},
  {path:'add-product', component: AddProductComponent},
  {path : 'add-category', component:AddCategoryComponent },
  {path : 'minicard', component:MinicardComponent},
  { path: 'pdf', loadChildren: () => import('./pdf/pdf.module').then(m => m.PdfModule) }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
