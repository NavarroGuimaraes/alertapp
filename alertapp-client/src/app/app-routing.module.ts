import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertListComponent } from './alert-list/alert-list.component';
import { CreateAlertComponent } from './create-alert/create-alert.component';
import { UpdateAlertComponent } from './update-alert/update-alert.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'alerts', pathMatch: 'full'},
  { path: 'alerts', component: AlertListComponent},
  { path: 'add', component: CreateAlertComponent},
  { path: 'update/:id', component: UpdateAlertComponent},
  { path: 'details/:id', component: AlertDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
