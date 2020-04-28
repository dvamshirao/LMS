import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from 'src/app/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 

  constructor(private hc:HttpClient,private rs:RegisterService,private router:Router) { }

  ngOnInit() {
  }
  
    


    
   }

