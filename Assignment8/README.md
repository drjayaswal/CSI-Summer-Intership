# File Upload and Weather API with Error Handling

This project demonstrates how to build a Node.js application with file upload capabilities, external API integration (OpenWeatherMap), and centralized error handling middleware.

## Features

- File upload functionality using Multer
- Weather data retrieval from OpenWeatherMap API
- Centralized error handling middleware
- Static file serving for uploaded files
- RESTful API endpoints

## Tech Stack

- Node.js
- Express.js
- Multer (for file uploads)
- Axios (for HTTP requests)
- dotenv (for environment variables)

## Project Structure

```
Assignment8
├── controllers/
│   ├── fileController.js
│   └── weatherController.js
├── middlewares/
│   └── errorMiddleware.js
├── routes/
│   ├── fileRoute.js
│   └── weatherRoute.js
├── uploads/                 (auto-created)
├── index.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js installed on your system
- OpenWeatherMap API key

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
PORT=5000
OPENWEATHER_API_KEY=your_openweather_api_key_here
```

### Run the project

```bash
npm start
```

Server will run at: `http://localhost:5000`

## API Endpoints

### File Upload Routes

- `POST /api/files/upload` - Upload a file

  - Body: Form data with file field
  - Returns: File upload confirmation with filename and path

### Weather Routes

- `GET /api/weather?city=<city_name>` - Get weather data for a city

  - Query Parameters: `city` (required)
  - Returns: Weather information including temperature and conditions

## Usage Examples

### Upload a file

```bash
curl -X POST http://localhost:5000/api/files/upload \
  -F "file=@/path/to/your/file.txt"
```

### Get weather data

```bash
curl -X GET "http://localhost:5000/api/weather?city=London"
```

### Access uploaded files

```
http://localhost:5000/uploads/filename.ext
```

## Error Handling

The application includes centralized error handling that:

- Catches and logs all errors
- Returns appropriate HTTP status codes
- Provides meaningful error messages
- Handles external API errors gracefully

## File Upload Features

- **Automatic Directory Creation**: Uploads folder is created automatically
- **Unique Filenames**: Files are saved with timestamp prefixes to avoid conflicts
- **Static File Serving**: Uploaded files are accessible via direct URLs
- **File Validation**: Checks for file presence before processing

## Weather API Integration

- **External API**: Integrates with OpenWeatherMap API
- **Error Handling**: Gracefully handles API failures and invalid requests
- **Data Formatting**: Returns clean, formatted weather data
- **Parameter Validation**: Ensures required city parameter is provided

## Security Considerations

- **File Upload Limits**: Configured to prevent abuse
- **Environment Variables**: Sensitive data stored in environment variables
- **Error Sanitization**: Prevents sensitive information leakage in error responses

## Dependencies

- `express`: Web framework
- `multer`: File upload middleware
- `axios`: HTTP client for API requests
- `dotenv`: Environment variable management
- `nodemon`: Development server (dev dependency)
