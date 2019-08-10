import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './home/bookings/bookings.component';
import { GuestsComponent } from './home/guests/guests.component';
import { RoomsComponent } from './home/rooms/rooms.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'bookings',
        component: BookingsComponent
      },
      {
        path: 'guests',
        component: GuestsComponent
      },
      {
        path: 'rooms',
        component: RoomsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
