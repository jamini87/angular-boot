import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: './base-modules/landing/feature/landing.module#LandingModule'
  },
  {
    path: 'auth',
    loadChildren: './base-modules/auth/feature/auth.module#AuthModule'
  },
  {
    path: 'panel',
    loadChildren: './base-modules/panel/panel.module#PanelModule'
  }
];

export const routingConfiguration: ExtraOptions = {
  useHash: true,
  paramsInheritanceStrategy: 'always'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
