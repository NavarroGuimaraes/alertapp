import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-alert',
  templateUrl: './update-alert.component.html',
  styleUrls: ['./update-alert.component.css']
})
export class UpdateAlertComponent implements OnInit {
  id: number;
  alert: Alert;
  submitted = false;
  isLoaded = false;

  constructor(private alertService: AlertService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit() {
    this.alert = new Alert();
    this.submitted = false;
    this.isLoaded = false;
    this.id = this.route.snapshot.params['id'];

    this.alertService.getAlert(this.id)
      .subscribe(
        data => {console.log(data),
        this.alert = data;
        this.isLoaded = true;
      },
      error => console.log(error)
      );
  }

  onSubmit() {
    this.submitted = true;
    this.updateAlert();
  }

  gotoList() {
    this.router.navigate(['/alerts'])
  }

  updateAlert() {
    this.alertService.updateAlert(this.id, this.alert)
      .subscribe(
        data => {console.log(data), this.gotoList(), this.alert = new Alert()},
        error => console.log(error)
      );
  }

}
