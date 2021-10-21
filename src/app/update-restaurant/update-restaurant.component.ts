import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css'],
})
export class UpdateRestaurantComponent implements OnInit {
  alert: boolean = false;
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private rest: CommonService,private router:ActivatedRoute) {}

  ngOnInit(): void {
    this.rest.getCurrentData(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.editRestaurant = new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email']),
      });
    })
  }
 updateRest() {
    // console.log(this.addRestaurant.value);
    this.rest.updateRest(this.router.snapshot.params.id,this.editRestaurant.value).subscribe((result) => {
      this.alert = true;
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
