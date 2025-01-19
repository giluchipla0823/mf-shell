import { loadRemoteModule } from '@angular-architects/module-federation';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ProductsModule',
      }).then((m) => m.ProductsModule),
  },
  {
    path: 'payment',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './PaymentComponent',
      }).then((m) => m.PaymentComponent),
  },
];
