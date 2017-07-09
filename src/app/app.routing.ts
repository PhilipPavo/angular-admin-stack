import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageSigninComponent } from './page-signin/page-signin.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: PageHomeComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: PageSigninComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
