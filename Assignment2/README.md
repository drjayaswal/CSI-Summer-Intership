# 🌐 File Management Server

## 📄 Description

This project demonstrates a Node.js HTTP server that implements basic file management operations. The server provides a web interface where users can create, read, and delete a text file through simple button interactions.

---

## 🚀 Getting Started

Follow the steps below to set up and run the server:

### 📦 Prerequisites

Ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)

---

### 🔧 Installation and Running the Server

1. **Clone or Download the Repository**  
   Clone this repository using Git or download the ZIP file:

   ```bash
   git clone https://github.com/drjayaswal/CSI-Summer-Intership.git
   ```

   If you downloaded the ZIP file, extract it to a folder.

2. **Navigate to the Project Directory**  
   Use the terminal to move into the project directory:

   ```bash
   cd CSI-Summer-Intership
   ```

3. **Navigate to the Week 2 Assignment Directory**  
   Use the terminal to move into the assignment directory:

   ```bash
   cd Assignment2
   ```

4. **Run the Server**  
   Start the server using the following command:

   ```bash
   node app.js
   ```

5. **Access the Server**  
   Open your web browser and visit:

   ```
   http://localhost:5000
   ```

6. **Use the File Management Interface**  
   You will see a web interface with three buttons:
   - **Create File**: Creates a text file named "Week2Assignment.txt"
   - **Read File**: Displays the contents of the file
   - **Delete File**: Removes the file from the server

---

## 🛠️ Code Overview

**Dependencies:**

This project uses Node.js's built-in modules:

- `http`: For creating the web server
- `fs`: For file system operations
- `path`: For handling file paths

**Key Features:**

- **Web Interface**: Provides a user-friendly HTML interface
- **File Operations**: Implements create, read, and delete operations
- **Error Handling**: Proper error handling for all file operations
- **Dynamic Responses**: Server responds with appropriate status codes and messages

---

**Code Snippet:**

```javascript
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:\${PORT}`);
});
```

---

## 📋 API Endpoints

| Endpoint  | Method | Description                        |
| --------- | ------ | ---------------------------------- |
| `/`       | GET    | Serves the HTML interface          |
| `/create` | POST   | Creates a new text file            |
| `/read`   | GET    | Reads and returns the file content |
| `/delete` | DELETE | Deletes the file                   |

---

## 📌 Notes

- **File Location**: The file is created in the same directory as the server script
- **File Content**: The file contains a predefined message with the author's name
- **Error Handling**: The server provides appropriate error messages if operations fail
- **Port Configuration**: To use a different port, modify the `PORT` constant in the `app.js` file

---

## 🔗 Resources

- [Node.js File System Documentation](https://nodejs.org/api/fs.html)
- [Node.js HTTP Module Documentation](https://nodejs.org/api/http.html)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## 👨‍💻 Author

- **Dhruv Ratan Jayaswal**
- Assignment - Week 2 | CSI Internship Program

---
