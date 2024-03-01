import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username: any;
  password: any;
  submitResponse: any;
  constructor(public formbuilder: FormBuilder, public router: Router) {}
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: [''],
      password: [''],
    });
  }
  loginSubmit() {
    this.username = this.loginForm.controls['username'].value;
    this.password = this.loginForm.controls['password'].value;
    if (this.username == 'gaurav' && this.password == '123456') {
      localStorage.setItem('username', this.username);
      this.submitResponse = 'Login Success';
    } else {
      this.submitResponse = 'Login Failed';
    }
  }
  close() {
    if (localStorage.getItem('username')) {
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    } else {
      window.location.reload();
    }
  }
}
