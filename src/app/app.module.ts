import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {User} from './models/user.model';
//import { SearchesComponent } from './components/searches/searches.component';
/// <reference types="google.maps" />
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatSelectModule} from '@angular/material/select';
import { ExcComponent } from './components/exc/exc.component';
import { AddPaymdetailsComponent } from './components/add-paymdetails/add-paymdetails.component';
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
     LogInComponent,
     SignUpComponent,
     ExcComponent,
     AddPaymdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    GoogleMapsModule
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
