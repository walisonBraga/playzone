import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'zona-user',
  },
  {
    path: 'zona-user',
    loadChildren: () =>
      import('./shared/zona-user/zona-user.module').then(m => m.ZonaUserModule),
    // canActivate: [AuthGuard],
    // canDeactivate: [ConfirmDeactivateGuard]
  },
];
