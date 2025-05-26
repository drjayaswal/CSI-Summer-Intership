# 🌐 Simple HTTP Server

## 📄 Description

This project demonstrates a basic HTTP server built using Node.js. The server listens on a specified port and responds with a simple "Hello World" message for every incoming request.

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

3. **Navigate to the Week 1 Assignment Directory**  
   Use the terminal to move into the project directory:

   ```bash
   cd Assignment1
   ```

4. **Run the Server**  
   Start the server using the following command:

   ```bash
   node app.js
   ```

5. **Access the Server**  
   Open your web browser or an HTTP client (e.g., Postman, curl) and visit:

   ```
   http://localhost:3000
   ```

6. **View the Response**  
   You will see the following message in your browser or client:
   ```
   Hello World
   ```

---

## 🛠️ Code Overview

**Dependencies:**

This project uses Node.js's built-in `http` module, so no external dependencies or installations are required.

**Key Features:**

- **Response Status Code:** Returns a status code of 200 (OK).
- **Content-Type:** Responds with plain text (`text/plain`).
- **Dynamic Port Configuration:** The port is defined in the code and can be modified easily.

---

**Code Snippet:**

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:\${PORT}/`);
});
```

---

## 📌 Notes

- **Change the Port:** To use a different port, modify the `PORT` constant in the `app.js` file and restart the server.
- **Custom Responses:** You can update the `res.end()` method to send a different message or content.

---

## 🔗 Resources

- [Node.js Official Documentation](https://nodejs.org/docs/)
- [HTTP Module Overview](https://nodejs.org/api/http.html)

---

## 👨‍💻 Author

- **Dhruv Ratan Jayaswal**
- Assignment - Week 2 | CSI Internship Program

---
