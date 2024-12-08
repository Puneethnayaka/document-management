import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { MockService } from '../mock.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css'],
})
export class DocumentUploadComponent implements OnInit {
  documentName: string = ''; // Stores document name
  selectedUser: string = ''; // Stores selected user's ID
  users: any[] = []; // Stores the list of users
  selectedFile: File | null = null; // Stores the selected file

  constructor(private mockService: MockService, private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch users from the service to populate the user dropdown
    this.mockService.getUsers().subscribe(
      (data) => {
        this.users = data; // Assign users data
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file && file.type === 'text/plain') {
      this.selectedFile = file; // Assign the selected file
    } else {
      this.selectedFile = null;
      console.error('Only text files are allowed.');
    }
  }

  onUpload(): void {
    if (!this.selectedUser || !this.documentName || !this.selectedFile) {
      console.error('User, document name, and file are required.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile); // Selected file
    formData.append('userId', this.selectedUser); // User ID
    formData.append('name', this.documentName); // Name field

    this.http
      .post('http://localhost:3000/api/user/documents/upload', formData)
      .subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading document:', error);
        }
      );
  }
}
