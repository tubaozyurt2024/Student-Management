# Student CRUD Application

A clean and modular **Full-Stack Student Management** application built with
modern backend and frontend practices.

The main goal of this project is not only to implement CRUD operations,
but to demonstrate **production-ready architecture, error handling, and clean code principles**.

---

## Tech Stack

### Backend
- Node.js
- Express.js
- Microsoft SQL Server
- mssql (msnodesqlv8)
- express-validator
- Swagger (OpenAPI)
- dotenv

### Frontend
- React
- Axios
- Functional Components

---

## Project Structure

### Backend
```text
backend/
 └─ src/
    ├─ config/          # Database connection
    ├─ controllers/     # Business logic
    ├─ routes/          # API routes
    ├─ middlewares/     # Error handling
    ├─ validators/      # Request validation
    ├─ swagger/         # API documentation
    ├─ app.js           # Express app setup
    └─ server.js        # Server bootstrap
```
# API Documentation (Swagger)

Swagger UI is enabled to explore and test all endpoints.

http://localhost:5000/api-docs


Swagger provides:

Endpoint list

Request & response examples

Validation rules

HTTP status codes

## Error Handling Strategy

- Centralized error handling middleware

- Database errors are mapped to user-friendly messages

- Technical details are kept on the server side

## Frontend Approach

- Clean React structure

- API communication isolated via Axios

- Clear user feedback for success and error states

- Backend completely decoupled from UI logic

## Database Design Notes

- Email field has a unique constraint

- Parameterized queries are used

- Environment variables protect sensitive configuration

## Running the Project
### Backend
`cd backend`
`npm install`
`npm start`

### Frontend
`cd frontend`
`npm install`
`npm start`

## Database Setup (SQL Server)

This project uses **Microsoft SQL Server** as the relational database.

---

### Requirements

- Microsoft SQL Server (Local / Express / Developer Edition)
- SQL Server Management Studio (SSMS)
- Windows Authentication enabled

---

### Step 1: Create Database
```CREATE DATABASE StudentDb;```


### Step 2: Use Database
```USE StudentDb;```

### Step 3: Create Students Table
``CREATE TABLE dbo.Students (
    StudentId INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Phone NVARCHAR(20) NULL,
    Department NVARCHAR(50) NULL,
    CreatedDate DATETIME NOT NULL DEFAULT GETDATE()
); ``


### Step 4: Add Unique Constraint
``CREATE UNIQUE INDEX UX_Students_Email
ON dbo.Students (Email);``



This constraint ensures that each student email address is unique.

### Step 5: Environment Configuration

Create a .env file in the backend root directory:

PORT=5000
DB_SERVER=.
DB_DATABASE=StudentDb


DB_SERVER=. refers to the local SQL Server instance


## Key Engineering Decisions

- Modular architecture

- Centralized error handling

- Validation before database access

- Clean and readable code

- Production-ready structure over quick hacks
