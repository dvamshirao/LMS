import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userdashboard/userprofile/userprofile.component';
import { UserupdatedetailsComponent } from './userdashboard/userupdatedetails/userupdatedetails.component';
import { UserchangepasswordComponent } from './userdashboard/userchangepassword/userchangepassword.component';
import { SubmitbookrequestComponent } from './userdashboard/submitbookrequest/submitbookrequest.component';
import { ViewissuedbooksComponent } from './userdashboard/viewissuedbooks/viewissuedbooks.component';



const routes: Routes = [
  {path:"userdashboard",component:UserdashboardComponent,children:[
    {path:'profile/changepassword',component:UserchangepasswordComponent},
    {path:'profile/updatedetails',component:UserupdatedetailsComponent},
    {path:'userprofile',component:UserprofileComponent},
    {path:'viewissuedbooks',component:ViewissuedbooksComponent},
    {path:'submitbookrequest',component:SubmitbookrequestComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
