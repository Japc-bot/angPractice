import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'dad',
    loadComponent: () => import('./pages/dad/dad'),
    children:[
      {
        path:'son',
        loadComponent:() => import('./pages/son/son')
      },
      {
        path:'**',
        redirectTo:'son'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'dad'
  }
];
