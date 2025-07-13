const express = require("express");
const dotenv = require("dotenv");
const fileRoutes = require("./routes/fileRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/files", fileRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/uploads", express.static("uploads"));

app.use(errorHandler); // centralized error handler

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
