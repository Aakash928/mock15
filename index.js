const express = require("express");
const cors = require("cors");
const formRoutes = require("./routes/formRoutes");
const connectDB = require("./db");

// Set up Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Set up API routes
app.use("/form", formRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
