import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
  id: number;
  alert: Alert;

  constructor(private alertService: AlertService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.alert = new Alert();

    this.id = this.route.snapshot.params['id'];
    this.alertService.getAlert(this.id)
      .subscribe(
        data => {console.log(data),
           this.alert = data, 
           this.alertService.updateAlert(this.id, data)
           .subscribe(data => console.log(data),
           error => console.log(error))},
        error => console.log(error)
      );

  }

  listAlerts(){
    this.router.navigate(['alerts'])
  }

}
