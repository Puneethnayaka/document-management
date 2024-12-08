import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  logout() {
    // This will log the user out (you can add actual logout logic here)
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['']); 
    window.location.reload(); 
  }

  ngOnInit(): void {
  }

}
