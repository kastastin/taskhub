import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";

import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";

// <-- Configurations -->
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// <-- Routes -->
app.get("/", (req, res) => {
  res.send("Home route: /");
});

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

// <-- Server -->
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
