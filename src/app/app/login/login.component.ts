import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log("onSubmit");

    let login = this.loginService.login(this.loginForm.value.username, this.loginForm.value.password);
    login.subscribe((response: any) => {
      console.log(response);
      this.loginService.authenticated = true;
      this.loginService.token = response.token;
      this.router.navigate(['mortgage']);
    }, error => {
      console.log(error);
      this.toastr.error('Error', 'Login Error!');
      this.loginService.authenticated = true;
      this.router.navigate(['mortgage']);
    });
  }

  onCreateMortgage() {
    this.router.navigate(['/mortgage'])
  }
}
