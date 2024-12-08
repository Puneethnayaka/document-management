import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { IngestionManagementComponent } from './ingestion-management/ingestion-management.component';
import { QnaInterfaceComponent } from './qna-interface/qna-interface.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'document-upload', component: DocumentUploadComponent },
  { path: 'ingestion-management', component: IngestionManagementComponent },
  { path: 'qna-interface', component: QnaInterfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
