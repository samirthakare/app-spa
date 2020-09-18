import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../pages/homescreenn/homescreenn.module#HomescreennPageModule'
          },
          {
            path:'subtab',
            loadChildren: '../pages/home1/home1.module#Home1PageModule'
          },
          {
            path:'subtab2',
            loadChildren: '../pages/home2/home2.module#Home2PageModule'
          }
        ]
      },
      {
        path: 'nearBy',
        children: [
          {
            path: '',
            loadChildren: '../pages/near-by/near-by.module#NearByPageModule'
          }
        ]
      },
      {
        path: 'appoinment',
        children: [
          {
            path: '',
            loadChildren:
              '../pages/appointment/appointment.module#AppointmentPageModule'
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren:
              '../pages/notification/notification.module#NotificationPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../pages/profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
