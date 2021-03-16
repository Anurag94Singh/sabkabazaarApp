import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path : 'products', loadChildren : () => import('./products/products.module').then(m => m.ProductsModule) },
  { path : 'account', loadChildren : () => import('./account/account.module').then(m => m.AccountModule) },
  { path : 'home', loadChildren : () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full' },
  { path : '', loadChildren : () => import('./account/account.module').then(m => m.AccountModule), pathMatch: 'full' },
  { path: '**', loadChildren : () => import('./account/account.module').then(m => m.AccountModule), pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
