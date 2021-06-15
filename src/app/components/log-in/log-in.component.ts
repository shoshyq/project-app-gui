import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  newUser:User = new User();
    subscribe:any

  constructor(private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('enter','0');
  }
  enter(frm:any){
    this.userService.Login(this.newUser.username,this.newUser.userpassword).subscribe(usercode=>
  {
    this.newUser.code=usercode; 
    if(usercode!=0)
   {
    sessionStorage.setItem('code',usercode.toString())
    console.log(usercode);
     //this.router.navigate(['/Home']);
    
   }
   else
console.log("no");
})
  }
}
