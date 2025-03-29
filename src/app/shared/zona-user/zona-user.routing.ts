import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

export const ZONA_USER_ROUTER: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const ZonaUserRoutes = RouterModule.forChild(ZONA_USER_ROUTER);
