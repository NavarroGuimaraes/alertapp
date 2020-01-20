import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-create-alert',
  templateUrl: './create-alert.component.html',
  styleUrls: ['./create-alert.component.css']
})
export class CreateAlertComponent implements OnInit {
  alert: Alert = new Alert();
  submitted = false;
  constructor(private alertService: AlertService
    , private router: Router) {

     }

  ngOnInit() {
  }

  newAlert(): void {
    this.submitted = false;
    this.alert = new Alert();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['alerts']);
  }

  async create() {
    const data = await this.alertService.createAlert(this.alert)
        .subscribe(
          data => {console.log(data), this.gotoList()},
          error => console.log(error)
        );
        this.alert = new Alert()
        return data;
  }

  async save(){
    try{
      const data = await this.create();
    }catch(e){
      
    }
  }


}
