import { Component } from '@angular/core';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-qna-interface',
  templateUrl: './qna-interface.component.html',
  styleUrls: ['./qna-interface.component.css'],
})
export class QnaInterfaceComponent {

  constructor(private mockService: MockService) {}
  question: string = ''; // User's question
  answer: string = ''; // Response from the backend
  documentExcerpts: string[] = []; // Document excerpts related to the question
  loading: boolean = false; // To show loading spinner while waiting for response
  errorMessage: string = ''; // For error handling

  ngOnInit(): void {}

  // Handle form submission to ask the question
  onSubmitQuestion() {
    if (this.question.trim()) {
      this.loading = true; // Show loading while waiting for response
      this.mockService.askQuestion(this.question).subscribe(
        (response) => {
          this.loading = false;
          this.answer = response.answer; // Assign the answer from the backend
          this.documentExcerpts = response.documentExcerpts; // Assign document excerpts
        },
        (error) => {
          this.loading = false;
          this.errorMessage = 'There was an error fetching the answer.';
          console.error('Error:', error);
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid question.';
    }
  }
}
