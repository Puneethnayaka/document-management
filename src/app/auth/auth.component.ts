import { Component, OnInit } from '@angular/core';
import { MockService } from '../mock.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  email: string = '';
  password: string = '';
  username: string = '';
  confirmPassword: string = '';
  currentPage: string = 'login';
  errorMessage: string = '';
  isLoggedIn = false;

  constructor(private authService: MockService, private router: Router) {}

  togglePage(page: string) {
    this.currentPage = page;
  }

  onSubmitLogin(loginForm: any) {
    if (this.email && this.password) {  
      this.authService.login({ email: this.email, password: this.password }).subscribe(
        (response) => {
          console.log('Login Successful:', response);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/user-management']).then(() => {
            // After navigating, refresh the page to ensure the new state is applied
            window.location.reload();
          });
          loginForm.reset();
        },
        (error) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.log('Login Failed:', error);
        }
      );
    } else {
      this.errorMessage = 'Please enter both email and password';
    }
  }

  onSubmitSignup(signupForm: any) {
    if (this.password === this.confirmPassword) {
      this.authService
        .signup({
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .subscribe(
          (response) => {
            console.log('SignUp Successful:', response);
            this.router.navigate(['']);
            signupForm.reset();
          },
          (error) => {
            console.log('SignUp Failed:', error);
          }
        );
    } else {
      console.log('Passwords do not match!');
    }
  }

  ngOnInit(): void {}
}
