import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'landing',
    loadComponent: () => import('./landing/landing.page').then( m => m.LandingPage)
  },
  {
    path: 'details',
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'details/:id',// Aquí agregamos un parámetro de ruta ':id' para identificar el producto
    loadComponent: () => import('./details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'category',
    loadComponent: () => import('./category/category.page').then( m => m.CategoryPage)
  },
  {
    path: 'category-detail',
    loadComponent: () => import('./category-detail/category-detail.page').then( m => m.CategoryDetailPage)
  },

  {
    path: 'category-detail/:codigo',
    loadComponent: () => import('./category-detail/category-detail.page').then( m => m.CategoryDetailPage)
  },
  {
    path: 'add-car',
    loadComponent: () => import('./add-car/add-car.page').then( m => m.AddCarPage)
  },
 
 
];
