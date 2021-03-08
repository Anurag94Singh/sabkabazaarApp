import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductscontainerComponent } from './productscontainer/productscontainer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path : '', component : CategoriesComponent},
  { path : 'products', component : ProductscontainerComponent},
  { path : 'products/:cID', component : ProductscontainerComponent},
  { path : 'signUp', component : SignUpComponent},
  { path : 'signIn', component : SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
