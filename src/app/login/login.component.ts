import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {



  userModel = new User('', '');
  errorMsg = '';
  // token = '';


  constructor(
    private _loginService: LoginService,
    private _http: HttpClient,
    private _router: Router
  ) { }

  onSubmit() {
    // console.log(this.userModel);
    this._loginService.login(this.userModel)
      .subscribe(
        response => {
          // console.log('Login Successful', response.access);
          // this.token = response.access;
          localStorage.setItem('access', response.access);


          console.log("Localstorage variable = " + localStorage.getItem('access'));

          if (localStorage.getItem('access') === null){

          }else{
            this._router.navigate(['./nav']);
          }

          
        },
        error => this.errorMsg = error.statusText
      )
  }

  ngOnInit(): void {

  }




}




