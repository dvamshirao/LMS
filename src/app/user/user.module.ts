import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userdashboard/userprofile/userprofile.component';
import { UserupdatedetailsComponent } from './userdashboard/userupdatedetails/userupdatedetails.component';
import { UserchangepasswordComponent } from './userdashboard/userchangepassword/userchangepassword.component';
import { SubmitbookrequestComponent } from './userdashboard/submitbookrequest/submitbookrequest.component';
import { ViewissuedbooksComponent } from './userdashboard/viewissuedbooks/viewissuedbooks.component';


@NgModule({
  declarations: [UserdashboardComponent, UserprofileComponent, UserupdatedetailsComponent, UserchangepasswordComponent, SubmitbookrequestComponent, ViewissuedbooksComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserprofileComponent,
    UserupdatedetailsComponent,
    UserchangepasswordComponent,
    ViewissuedbooksComponent,
    SubmitbookrequestComponent
  ]
})
export class UserModule { }
