import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './flow/landing/landing.component';
import {DashboardComponent} from './flow/dashboard/dashboard.component';
import {LoginComponent} from './components/log-in/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {DashboardGuard} from './guards/dashboard.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard]},
  {path: '**', redirectTo: '/landing'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [DashboardGuard]
})
export class AppRoutingModule {
}