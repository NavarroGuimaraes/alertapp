import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAlertComponent } from './create-alert/create-alert.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { UpdateAlertComponent } from './update-alert/update-alert.component';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CreateAlertComponent,
    AlertDetailsComponent,
    AlertListComponent,
    UpdateAlertComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
