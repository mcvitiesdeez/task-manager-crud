require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

//Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`✅ Server is running on http://localhost:${PORT}`);
})