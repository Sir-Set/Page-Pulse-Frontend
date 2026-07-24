import express from "express";
import cors from "cors";
import routes from "./routes.js";
import logger from "./logger.js";

const app = express();

// Allow frontend requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Assign request ID + log start
app.use((req, res, next) => {
  req.id = Date.now().toString(36);
  logger.info(`Request ${req.id} started`);
  next();
});

// Routes
app.use("/audit", routes);

// Error handler
app.use((err, req, res, next) => {
  logger.error(`Error in request ${req.id}: ${err.message}`);
  res.status(500).json({ requestId: req.id, error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
