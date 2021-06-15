import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcComponent } from './components/exc/exc.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddPaymdetailsComponent} from './components/add-paymdetails/add-paymdetails.component'
const routes: Routes = [
  { path: 'LogIn', component:  LogInComponent},
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Exc', component: ExcComponent },
  { path:'Home', component : HomeComponent} ,
  { path:'PaymentDetails', component : AddPaymdetailsComponent,children:[

  ]} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
