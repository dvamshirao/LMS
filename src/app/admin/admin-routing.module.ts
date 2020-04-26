import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminprofileComponent } from './admindashboard/adminprofile/adminprofile.component';
import { AdmincontactComponent } from './admindashboard/admincontact/admincontact.component';
import { NotifydelaysComponent } from './admindashboard/notifydelays/notifydelays.component';
import { IssueComponent } from './admindashboard/issue/issue.component';
import { ReturnComponent } from './admindashboard/return/return.component';
import { ProjectlistComponent } from './admindashboard/projectlist/projectlist.component';
import { AddprojectsComponent } from './admindashboard/addprojects/addprojects.component';
import { BookslistComponent } from './admindashboard/bookslist/bookslist.component';
import { AddbooksComponent } from './admindashboard/addbooks/addbooks.component';
import { AdduserComponent } from './admindashboard/adduser/adduser.component';
import { ViewusersComponent } from './admindashboard/viewusers/viewusers.component';
import { ChangepasswordComponent } from './admindashboard/changepassword/changepassword.component';
import { UpdatedetailsComponent } from './admindashboard/updatedetails/updatedetails.component';



const routes: Routes = [
  {path:'admindashboard',component:AdmindashboardComponent,children:[
    {path:'admincontact',component:AdmincontactComponent},
    {path:'notifydelays',component:NotifydelaysComponent},
    {path:'circulation/issue',component:IssueComponent},
    {path:'circulation/return',component:ReturnComponent},
    {path:'projects/projectslist',component:ProjectlistComponent},
    {path:'projects/addproject',component:AddprojectsComponent},
    {path:'books/bookslist',component:BookslistComponent},
    {path:'books/addbooks',component:AddbooksComponent},
    {path:'manageusers/adduser',component:AdduserComponent},
    {path:'manageusers/viewusers',component:ViewusersComponent},
    {path:'adminprofile',component:AdminprofileComponent},
    {path:'profile/updatedetails',component:UpdatedetailsComponent},
    {path:'profile/changepassword',component:ChangepasswordComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
