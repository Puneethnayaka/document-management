import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Document-Management';
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Check login status on app load
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  login() {
    // Simulate login logic
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true'); // Store login status
    this.router.navigate(['/user-management']); // Redirect to the user management page
  }

}
