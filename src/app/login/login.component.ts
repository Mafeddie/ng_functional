import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { auth } from "./auth";
import { user } from './auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  readonly URL= 'https://ecommerce-apis.herokuapp.com/auth/login/';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('',[
    Validators.minLength(6)
    
  ]);
    constructor( ) {
      
      // private http :HttpClient
      //   const data : user={
      //     email: "admin@gmail.com",
      //     password : "admin"
    
      //   }
      //   this.payload = this.http.post(this.URL, data).toPromise().then( res=>{

      //     console.log(res);
      //   )}
        



      
  
      }
      ngOnInit(): void {

      }
   
    }




