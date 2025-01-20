import { loadRemoteModule } from '@angular-architects/module-federation';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    /* loadChildren: () =>
      loadRemoteModule('mfShopping', './ProductsModule').then(
        (m) => m.ProductsModule
      ), */

    /* loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent), */
    loadComponent: () =>
      loadRemoteModule('mfShopping', './ProductsComponent').then(
        (m) => m.ProductsComponent
      ),
  },

  {
    path: 'payment',
    loadComponent: () =>
      loadRemoteModule('mfPayment', './PaymentComponent').then(
        (m) => m.PaymentComponent
      ),
  },
];
