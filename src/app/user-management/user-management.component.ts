import { Component, OnInit } from '@angular/core';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  currentPage: any;

  constructor(private mockService: MockService) {}

  fetchUsers() {
    this.mockService.getUsers().subscribe(
      (users) => {
        this.users = users;  // Store fetched users
      },
      (error) => {
        console.log('Error fetching users:', error);
      }
    );
  }

  ngOnInit(): void {
  }
}
