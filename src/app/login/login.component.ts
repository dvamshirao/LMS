import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { TagContentType } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router,private ls:LoginService){}

  ngOnInit() {
    setTimeout(()=>{
      this.ls.userLoginStatus=false;
      this.ls.adminLoginStatus=false;

      this.ls.doLogout();
    },0);
  }
  /*submitForm(dataObj)
  {
    // console.log(dataObj);
    if(dataObj.username=="admin"&&dataObj.password=="admin")
    {
      //navigate to admindashboard component
      this.router.navigate(['admindashboard']);
    }
    else
    {
      //navigate to userdashboard component
      this.router.navigate(['userdashboard']);
    } 
  }*/
 role:number=1;
 func(value)
 {
 this.role=value;
 console.log(this.role);
 

 }
  submitForm(dataObj)
  {
    if(this.role==1)
    {
      console.log("vamshirao");
      this.ls.doLoginadmin(dataObj).subscribe((result)=>{
        if(result["message"]=="invalid username")
        {
          alert("invalid username");
        }
        else if(result["message"]=="invalid password")
        {
          alert("invalid password");
        }
        else
        {
          alert("admin login success");
          console.log(result["message"]);
          //save token in local storage of browser
          localStorage.setItem("token",result["message"]);
   
          this.ls.adminLoginStatus=true;
          this.ls.username=result['username'];
          //redirect to userdashboard 
          this.router.navigate(['/admindashboard']);
        }
       })
    }
    else
    {
      console.log("vamshiraodeshineni");
    this.ls.doLoginuser(dataObj).subscribe((result)=>{
     if(result["message"]=="invalid username")
     {
       alert("invalid username");
     }
     else if(result["message"]=="invalid password")
     {
       alert("invalid password");
     }
     else
     {
       alert("login success");
       //save token in local storage of browser
       localStorage.setItem("token",result["message"]);

       this.ls.userLoginStatus=true;
       this.ls.username=result['username'];
       //redirect to userdashboard 
       this.router.navigate(['/userdashboard']);
     }
    })
  }
}
}
