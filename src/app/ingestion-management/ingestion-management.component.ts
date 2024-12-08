import { Component } from '@angular/core';
import { MockService } from '../mock.service';

@Component({
  selector: 'app-ingestion-management',
  templateUrl: './ingestion-management.component.html',
  styleUrls: ['./ingestion-management.component.css']
})
export class IngestionManagementComponent {

  constructor(private mockService: MockService) {}

  onStartIngestion() {
    // this.mockService.startIngestion().subscribe(response => {
    //   console.log(response);
    // });
  }
}
