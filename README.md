# 100xdevs Website

![100xdevs](https://github.com/user-attachments/assets/339db23c-d817-4eda-92c4-fe0a4ffb57df)

A fully functional 100xdevs clone website built with **React**, **Node.js**, **Express**, **MongoDB**, and **State Management**.

Check out the live demo of the website: [Live website](https://100xdevs-rosy.vercel.app/)


# Technologies Used
 ### React:
 For building the user interface
### Node.js: 
JavaScript runtime for building the backend server
### Express: 
A minimal and flexible Node.js web application framework
### MongoDB: 
NoSQL database for storing course, tutor, and user data
### JWT Authentication: 
For securing API routes and authenticating users
### Redux or Context API: 
For state management on the frontend
### Axios: 
For making API requests to the backend

## Features
- **User-side functionality**:
  - Course browsing
  - Purchase functionality
  - User authentication (login, registration)
  - Enrollment process

**Tech stack**:
  - **Frontend**: React, React Router, Axios
  - **Backend**: Node.js, Express, JWT Authentication
  - **Database**: MongoDB
  - **State Management**: Redux or Context API (for managing user state, enrollment, etc.)

# Setup Instructions

### 1. Clone the repository

Clone the project to your local machine using the following command:
#### frontend: 
```
git clone https://github.com/yourusername/CourseSellingApp-Frontend.git
```
#### backend: 
```
git clone https://github.com/yourusername/CourseSellingApp-Backend.git
```

### 2. Install Dependencies
First, install dependencies for both the frontend and backend:

Frontend (React)
Navigate to the frontend directory:
```
cd CourseSellingApp-Frontend
```
install the reqired Dependencies
```
npm install
```
Backedn (nodejs + Express)
Navigate to the backend directory:
```
cd CourseSellingApp-Backend
```
install the required dependencied
```
npm install
```
### 3. Set Up Environment Variables
Create a .env file in the root of both the frontend and backend directories to store environment variables.
## Frontend
In the frontend/.env file, add the following variables:
```
REACT_APP_API_URL=http://localhost:5000/api/v1
```
## Backend
In the backend/.env file, add your MongoDB URI and JWT Secret:
```
MONGO_URI=your_mongo_url
JWT_SECRET=your-jwt-secret
PORT=5000
```
Make sure MongoDB is running locally or replace the MONGO_URI with your cloud MongoDB connection string.

# Start the Development server
#### Frontend
```
npm run dev
```
#### Backend
```
npm run dev
```


