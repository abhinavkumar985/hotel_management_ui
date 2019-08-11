import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './custome-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagePopupComponent } from './common/message-popup/message-popup.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { BookingsComponent } from './home/bookings/bookings.component';
import { RoomsComponent } from './home/rooms/rooms.component';
import { GuestsComponent } from './home/guests/guests.component';
import { AdminComponent } from './home/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MessagePopupComponent,
    DashboardComponent,
    BookingsComponent,
    RoomsComponent,
    GuestsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MessagePopupComponent]
})
export class AppModule { }
