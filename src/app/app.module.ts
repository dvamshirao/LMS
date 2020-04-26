import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularjsComponent } from './angularjs/angularjs.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { AuthorizationService } from './authorization.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { UpdatedetailsComponent } from './admin/admindashboard/updatedetails/updatedetails.component';
import { ChangepasswordComponent } from './admin/admindashboard/changepassword/changepassword.component';
import { UserupdatedetailsComponent } from './user/userdashboard/userupdatedetails/userupdatedetails.component';
import { UserchangepasswordComponent } from './user/userdashboard/userchangepassword/userchangepassword.component';
import { ViewissuedbooksComponent } from './user/userdashboard/viewissuedbooks/viewissuedbooks.component';
import { SubmitbookrequestComponent } from './user/userdashboard/submitbookrequest/submitbookrequest.component';
import { UserprofileComponent } from './user/userdashboard/userprofile/userprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    AboutusComponent,
    ContactusComponent,
    TechnologiesComponent,
    AngularjsComponent,
    NodejsComponent,
    JavascriptComponent,
    ExpressjsComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    AdmincontactComponent,
    NotifydelaysComponent,
    IssueComponent,
    ReturnComponent,
    ProjectlistComponent,
    AddprojectsComponent,
    AddbooksComponent,
    BookslistComponent,
    AdduserComponent,
    ViewusersComponent,
    AdminprofileComponent,
    UpdatedetailsComponent,
    ChangepasswordComponent,
    UserprofileComponent,
    UserupdatedetailsComponent,
    UserchangepasswordComponent,
    ViewissuedbooksComponent,
    SubmitbookrequestComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
   
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationService,
      multi:true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
