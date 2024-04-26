import express from "express";
import foodRoute from "./routes/foodRoute.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Your routes here
app.use("/api/food", foodRoute);

// Error handling middleware should be the last piece of middleware added to the app
app.use((err, _req, res, next) => {
  if (!err) return next(); // if there is no error, continue to the next middleware
  // Handle the error and send a response
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
