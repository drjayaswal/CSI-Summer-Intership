const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5001;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  // Serve the HTML page for the root route
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>File Management Assignment</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 350px;
          }
          h2 {
            margin-bottom: 10px;
            color: #333;
          }
          p {
            color: #555;
            font-size: 14px;
            margin-bottom: 20px;
          }
          button {
            margin: 10px 0;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
          footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>File Management Assignment</h2>
          <p>Submitted by: Dhruv Ratan Jayaswal</p>
          <button onclick="sendRequest('/create', 'POST')">Create File</button>
          <br>
          <button onclick="sendRequest('/read', 'GET')">Read File</button>
          <br>
          <button onclick="sendRequest('/delete', 'DELETE')">Delete File</button>
          <footer>Assignment - Week 2 | CSI Internship Program</footer>
        </div>
        <script>
          async function sendRequest(endpoint, method) {
            try {
              const response = await fetch(endpoint, { method });
              const result = await response.text();
              alert(result);
            } catch (error) {
              alert("An error occurred: " + error.message);
            }
          }
        </script>
      </body>
      </html>
    `);
  }

  // Handle file creation
  else if (url === "/create" && method === "POST") {
    const filePath = path.join(__dirname, "Week2Assignment.txt");
    fs.writeFile(
      filePath,
      "Hello, my name is Dhruv Ratan Jayaswal. This is my Week 2 assignment for the CSI internship program!",
      (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          return res.end("Error creating file.");
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("File created successfully.");
      }
    );
  }

  // Handle file reading
  else if (url === "/read" && method === "GET") {
    const filePath = path.join(__dirname, "Week2Assignment.txt");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.writeHead(404, { "Content-Type": "text/plain" });
          return res.end("File does not exist. Please create it first.");
        }
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error reading file.");
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  }

  // Handle file deletion
  else if (url === "/delete" && method === "DELETE") {
    const filePath = path.join(__dirname, "Week2Assignment.txt");
    fs.unlink(filePath, (err) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.writeHead(404, { "Content-Type": "text/plain" });
          return res.end("File does not exist. Nothing to delete.");
        }
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error deleting file.");
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("File deleted successfully.");
    });
  }

  // Handle invalid routes
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Invalid route.");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
