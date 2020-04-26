import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmincontactComponent } from './admindashboard/admincontact/admincontact.component';
import { NotifydelaysComponent } from './admindashboard/notifydelays/notifydelays.component';
import { IssueComponent } from './admindashboard/issue/issue.component';
import { ReturnComponent } from './admindashboard/return/return.component';
import { ProjectlistComponent } from './admindashboard/projectlist/projectlist.component';
import { AddprojectsComponent } from './admindashboard/addprojects/addprojects.component';
import { AddbooksComponent } from './admindashboard/addbooks/addbooks.component';
import { BookslistComponent } from './admindashboard/bookslist/bookslist.component';
import { AdduserComponent } from './admindashboard/adduser/adduser.component';
import { ViewusersComponent } from './admindashboard/viewusers/viewusers.component';
import { AdminprofileComponent } from './admindashboard/adminprofile/adminprofile.component';
import { ChangepasswordComponent } from './admindashboard/changepassword/changepassword.component';
import { UpdatedetailsComponent } from './admindashboard/updatedetails/updatedetails.component';


@NgModule({
  declarations: [AdmindashboardComponent, AdminprofileComponent, AdmincontactComponent, NotifydelaysComponent, IssueComponent, ReturnComponent, ProjectlistComponent, AddprojectsComponent, AddbooksComponent, BookslistComponent, AdduserComponent, ViewusersComponent, ChangepasswordComponent, UpdatedetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NotifydelaysComponent,
    IssueComponent,
    ReturnComponent,
    ProjectlistComponent,
    AddprojectsComponent,
    AddbooksComponent,
    BookslistComponent,
    AdduserComponent,
    ViewusersComponent,
    ChangepasswordComponent,
    UpdatedetailsComponent
  ]
})
export class AdminModule { }
