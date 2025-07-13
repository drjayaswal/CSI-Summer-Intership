# Authentication API with JWT and bcrypt

This project demonstrates how to build a secure authentication system using Node.js, Express, JWT (JSON Web Tokens), and bcrypt for password hashing.

## Features

- User registration with password hashing
- User login with JWT token generation
- Protected routes using middleware
- Password encryption using bcrypt
- JWT-based authentication

## Tech Stack

- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

## Project Structure

```
Assignment7
├── controllers/
│   └── authController.js
├── middlewares/
│   └── authMiddleware.js
├── routes/
│   └── authRoute.js         
├── user.json                
├── index.js                 
└── package.json
```

## Getting Started

### Prerequisites

- Node.js installed on your system

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=24h
PORT=5000
```

### Run the project

```bash
npm start
```

Server will run at: `http://localhost:5000`

## API Endpoints

### Authentication Routes

- `POST /api/auth/signup` - Register a new user

  - Body: `{ "email": "user@example.com", "password": "password123" }`

- `POST /api/auth/login` - Login user

  - Body: `{ "email": "user@example.com", "password": "password123" }`
  - Returns: JWT token

- `GET /api/auth/protected` - Access protected route
  - Headers: `Authorization: Bearer <jwt_token>`

## Usage Examples

### Register a new user

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Access protected route

```bash
curl -X GET http://localhost:5000/api/auth/protected \
  -H "Authorization: Bearer <your_jwt_token>"
```

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt before storage
- **JWT Tokens**: Secure token-based authentication
- **Protected Routes**: Middleware to verify JWT tokens
- **Environment Variables**: Sensitive data stored in environment variables
