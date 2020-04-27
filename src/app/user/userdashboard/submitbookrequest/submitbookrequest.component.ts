import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-submitbookrequest',
  templateUrl: './submitbookrequest.component.html',
  styleUrls: ['./submitbookrequest.component.css']
})
export class SubmitbookrequestComponent implements OnInit {
  

  constructor(private hc:HttpClient) {}


  ngOnInit() {
  }
  sendreq()
  {
    this.hc.get('/user/test').subscribe((res)=>{
      alert(res["message"]);
    })
  }

}
