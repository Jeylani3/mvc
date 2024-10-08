
// server.js
require('dotenv').config();
const app = require('./app'); // Import the Express app
const connectDB = require('./config/db'); // Import the MongoDB connection logic

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(); // Ensure the database connection is successful first
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process if the DB connection fails
  }
};

startServer();
