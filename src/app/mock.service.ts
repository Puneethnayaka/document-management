import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  documentName: string = ''; // Stores document name
  selectedUser: string = ''; // Stores selected user's ID
  users: any[] = []; // Stores the list of users
  selectedFile: File | null = null; // Stores the selected file

  private apiUrl = 'http://localhost:3000/api/user'; // Backend API URL

  constructor(private http: HttpClient) {}

  signup(userData: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  login(loginData: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  // Method to fetch users from the database
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);  // Send GET request to fetch users
  }

  logout() {
    return of({ message: 'Logged out successfully!' });
  }

  // Upload document metadata and file
  uploadDocumentWithFile(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/documents/upload`, formData);
  }


  // Method to send question and receive the answer
  askQuestion(question: string): Observable<any> {
    const body = { question };
    return this.http.post<any>(`${this.apiUrl}/ask`, body);  // POST to backend API
  }


}
