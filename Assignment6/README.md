# RESTful API Project with Node.js and Express

This project is a simple REST API using Node.js and Express that performs CRUD operations on a User resource.

## Features

- Create a user
- Retrieve all users
- Retrieve a user by ID
- Update a user
- Delete a user

## Tech Stack

- Node.js
- Express
- Body-Parser

## Getting Started

### Prerequisites

- Node.js installed on your system

### Run the project

```bash
npm run dev
```

Server will run at: `http://localhost:3000`

### API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user
