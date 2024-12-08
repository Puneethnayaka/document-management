# DocumentManagement

This project is a web application that provides user authentication, user management, document upload functionality, and a Q&A interface. It is built with Angular on the frontend and Express.js with MongoDB on the backend.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Technologies Used
-> Frontend: Angular 14, HTML, CSS, TypeScript

 -> Backend: Express.js, MongoDB, bcryptjs, Multer

-> Authentication: Custom authentication system (signup, login)

-> File Upload: Multer for handling file uploads

-> Q&A Interface: API endpoint to send questions and receive answers

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Angular Routes

The project uses Angular's Router to manage navigation between different views. Below are the routes available in the application

1. /: Displays the AuthComponent for user authentication.
2. /user-management: Displays the UserManagementComponent.
3. /document-upload: Displays the DocumentUploadComponent.
4. /ingestion-management: Displays the IngestionManagementComponent.
5. /qna-interface: Displays the QnaInterfaceComponent.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Backend Setup
1. To run the backend: Install dependencies: npm install

2. Start the server: node server.js

The server will run on http://localhost:3000 and will handle requests for user management, document uploads, and Q&A interactions.

## API Endpoints
1. POST `/api/signup`: Create a new user.
2. POST `/api/login`: Log in an existing user.
3. GET `/api/users`: Fetch all users.
4. POST `/api/documents/upload`: Upload a document for a user.
5. POST `/api/ask`: Ask a question and receive a response.


## Mongo Database Setup
Ensure that MongoDB is running and configured correctly for the application to interact with the database.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
