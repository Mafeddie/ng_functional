import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { auth } from "./auth";
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  readonly URL = 'https://ecommerce-apis.herokuapp.com/auth/login/';

  userModel = new User('edward@proton.com', 'passwordndogo');
  errorMsg = '';
  token = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.minLength(6)

  ]);
  constructor(
    private _loginService: LoginService,
    private _http: HttpClient
  ) { }

  onSubmit() {
    // console.log(this.userModel);
    this._loginService.login(this.userModel)
      .subscribe(
        response => {
          // console.log('Login Successful', response.access);
          this.token = response.access;
          localStorage.setItem('access', response.access);


          console.log("Localstorage variable = " + localStorage.getItem('access'));
        },
        error => this.errorMsg = error.statusText
      )
  }

  ngOnInit(): void {

  }




}




