import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from '../alert'
import { AlertService } from '../alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  alerts: Observable<Alert[]>
  isDeleting = false;
  constructor(private alertService: AlertService, private router: Router) { 

  }

  ngOnInit() {
    this.reloadAlerts();
    console.log("reload Alerts")
  }

  reloadAlerts(){
    this.alerts = this.alertService.getAlertList();
    console.log(this.alerts);
  }

  deleteAlert(id: number){
    this.isDeleting = true;
    this.alertService.deleteAlert(id)
        .subscribe(
            data => {
              console.log(data);
              this.isDeleting = false;
              this.reloadAlerts();
        }, 
        error => console.log(error));
  }

  alertDetails(id:number) {
    this.router.navigate(['details', id]);
  }

  updateAlert(id:number) {
    this.router.navigate(['update', id]);
  }

}
