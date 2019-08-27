import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { CartComponent } from './cartModule/cartComponent/cart.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'detailsProduct',
        loadChildren: './productMangement/product-management.module#ProductManagementModule'
      },
      {
        path: 'cartDetails',
        component: CartComponent
      }
      // {
      //     path: '',
      //     loadChildren: './userpage/user.module#UserModule'
      // }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'pages',
      loadChildren: './pages/pages.module#PagesModule'
    }]
  }
];
