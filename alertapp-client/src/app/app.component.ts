import { Component } from '@angular/core';
import { Alert } from './alert';
import { Observable } from 'rxjs';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avisos';
  alerts: Observable<Alert[]>
  pageOfItems: Array<Alert>;

  constructor(private alertService: AlertService){

  }

  ngOnInit() {
    this.alerts = this.alertService.getAlertList();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;

  }
}
