import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BlankLayoutComponent } from './layers/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layers/auth-layout/auth-layout.component';
import authGuardGuard from './guards/auth-guard.guard';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        title: 'home',
        canActivate: [authGuardGuard],
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'cart',
        canActivate: [authGuardGuard],
      },
      {
        path: 'products',
        component: ProductsComponent,
        title: 'products',
        canActivate: [authGuardGuard],
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        title: 'categories',
        canActivate: [authGuardGuard],
      },
      {
        path: 'brands',
        component: BrandsComponent,
        title: 'brands',
        canActivate: [authGuardGuard],
      },
      {
        path: 'detail/:hamada',
        component: DetailComponent,
        title: 'product-details',
        canActivate: [authGuardGuard],
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        title: 'register',
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'login',
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'notfound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
