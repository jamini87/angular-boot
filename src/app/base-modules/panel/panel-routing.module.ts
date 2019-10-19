import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PanelComponent} from './_index/panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '',
        loadChildren: '../../main-modules/dashboard/feature/dashboard.module#DashboardModule'
      },
      {
        path: 'widgets',
        loadChildren: '../../main-modules/-widgets/widgets-routing.module#WidgetsRoutingModule'
      },
      {
        path: 'commons',
        loadChildren: '../../main-modules/-commons/commons-routing.module#CommonsRoutingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
