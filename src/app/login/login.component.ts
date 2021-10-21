import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  email: string = '';
  password: string = '';
  constructor(private rest: CommonService, private router: Router) {}

  ngOnInit(): void {}
  loginUser(){
    if(this.email == "admin@gmail.com" && this.password =="Admin@123"){
      this.router.navigate(['../list']);
    }
    else{
      alert("Please enter Correct details")
    }
  }
}
