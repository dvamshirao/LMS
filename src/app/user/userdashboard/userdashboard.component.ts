import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  username:String;
  constructor(private ls:LoginService,private hc:HttpClient) { }

  ngOnInit() {
    this.username=this.ls.username;
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
 
  }
  changestatus()
  {
    this.ls.userLoginStatus=false;
    this.ls.doLogout();
  }

  sendTestReq()
  {
    this.hc.get('/user/test').subscribe((res)=>{
      alert(res["message"]);
    });
  }

}
