import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { AdmincontactComponent } from './admin/admindashboard/admincontact/admincontact.component';
import { NotifydelaysComponent } from './admin/admindashboard/notifydelays/notifydelays.component';
import { IssueComponent } from './admin/admindashboard/issue/issue.component';
import { ReturnComponent } from './admin/admindashboard/return/return.component';
import { ProjectlistComponent } from './admin/admindashboard/projectlist/projectlist.component';
import { AddprojectsComponent } from './admin/admindashboard/addprojects/addprojects.component';
import { AddbooksComponent } from './admin/admindashboard/addbooks/addbooks.component';
import { BookslistComponent } from './admin/admindashboard/bookslist/bookslist.component';
import { AdduserComponent } from './admin/admindashboard/adduser/adduser.component';
import { ViewusersComponent } from './admin/admindashboard/viewusers/viewusers.component';
import { AdminprofileComponent } from './admin/admindashboard/adminprofile/adminprofile.component';
import { ChangepasswordComponent } from './admin/admindashboard/changepassword/changepassword.component';
import { UpdatedetailsComponent } from './admin/admindashboard/updatedetails/updatedetails.component';
import { UserupdatedetailsComponent } from './user/userdashboard/userupdatedetails/userupdatedetails.component';
import { UserchangepasswordComponent } from './user/userdashboard/userchangepassword/userchangepassword.component';
import { ViewissuedbooksComponent } from './user/userdashboard/viewissuedbooks/viewissuedbooks.component';
import { SubmitbookrequestComponent } from './user/userdashboard/submitbookrequest/submitbookrequest.component';
import { UserprofileComponent } from './user/userdashboard/userprofile/userprofile.component';




const routes: Routes = [
  //special route for empty path
  //not loading but redirecting
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'user/register',component:RegisterComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
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
    {path:'profile/changepassword',component:ChangepasswordComponent},
    {path:'profile/updatedetails',component:UpdatedetailsComponent}
  ]},
  {path:'userdashboard',component:UserdashboardComponent,children:[
    {path:'profile/changepassword',component:UserchangepasswordComponent},
    {path:'profile/updatedetails',component:UserupdatedetailsComponent},
    {path:'userprofile',component:UserprofileComponent},
    {path:'viewissuedbooks',component:ViewissuedbooksComponent},
    {path:'submitbookrequest',component:SubmitbookrequestComponent}
  ]},
  {path:'technologies',component:TechnologiesComponent,children:[
    {path:'javascript',component:JavascriptComponent},
    {path:'nodejs',component:NodejsComponent},
    {path:'expressjs',component:ExpressjsComponent},
    {path:'angularjs',component:AngularjsComponent}
  ]},
  //special route for any other route than mentioned
  //always should be at last 
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
