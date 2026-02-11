import dotenv from "dotenv";
import app from "./app";

// Load Environment Variables
dotenv.config({ quiet: true });

const PORT = process.env.PORT || 5000;

//function to start an server
const startServer = async () => {
  try {
    //database connection

    //start server
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
