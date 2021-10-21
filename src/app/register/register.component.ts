import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  createUser = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private rest:CommonService) { }

  ngOnInit(): void {
  }
  regUser(){
    console.log(this.createUser.value);
    this.rest.createUser(this.createUser.value).subscribe((result)=>{
      console.log(result,"data created sucessfully");
    })
  }
  createRest() {
    // console.log(this.addRestaurant.value);
    this.rest.addRest(this.createUser.value).subscribe((result) => {
      this.alert = true;
      this.createUser.reset({});
      console.log('Get data from service', result);
    });
  }

}
