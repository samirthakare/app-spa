import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'starter', pathMatch: 'full' },

  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'starter',
    loadChildren: './pages/starter/starter.module#StarterPageModule'
  },
  {
    path: 'sign-in',
    loadChildren: './pages/sign-in/sign-in.module#SignInPageModule'
  },
  {
    path: 'sign-up',
    loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule'
  },
  {
    path: 'forgot-password',
    loadChildren:
      './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule'
  },
  {
    path: 'slider',
    loadChildren: './pages/slider/slider.module#SliderPageModule'
  },
  {
    path: 'phone-verification',
    loadChildren:
      './pages/phone-verification/phone-verification.module#PhoneVerificationPageModule'
  },
  {
    path: 'otpverification',
    loadChildren:
      './pages/otpverification/otpverification.module#OTPVerificationPageModule'
  },
  {
    path: 'book-appointment',
    loadChildren:
      './pages/book-appointment/book-appointment.module#BookAppointmentPageModule'
  },
  {
    path: 'select-service',
    loadChildren:
      './pages/select-service/select-service.module#SelectServicePageModule'
  },
  {
    path: 'booking-detail',
    loadChildren:
      './pages/booking-detail/booking-detail.module#BookingDetailPageModule'
  },

  {
    path: 'salon-detail',
    loadChildren:
      './pages/salon-detail/salon-detail.module#SalonDetailPageModule'
  },
  { path: 'multivendar', loadChildren: './multivendar/multivendar.module#MultivendarPageModule' },
  { path: 'nearbymultivandor', loadChildren: './nearbymultivandor/nearbymultivandor.module#NearbymultivandorPageModule' },
  { path: 'homescreenn', loadChildren: './pages/homescreenn/homescreenn.module#HomescreennPageModule' },
  { path: 'home1', loadChildren: './pages/home1/home1.module#Home1PageModule' },
  { path: 'home2', loadChildren: './pages/home2/home2.module#Home2PageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'packages', loadChildren: './pages/packages/packages.module#PackagesPageModule' },
  { path: 'booking-time-date', loadChildren: './pages/booking-time-date/booking-time-date.module#BookingTimeDatePageModule' },
  { path: 'bookingdetils', loadChildren: './pages/bookingdetils/bookingdetils.module#BookingdetilsPageModule' },
  { path: 'appointment', loadChildren: './pages/appointment/appointment.module#AppointmentPageModule' },
  /* { path: 'sucessful', loadChildren: './pages/sucessful/sucessful.module#SucessfulPageModule' } */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
