import express from "express";
import { PORT } from "./config/env";
import cookieParser from "cookie-parser" 
import taskRouter from "./routes/tasks.routes";
import authRouter from "./routes/auth.routes";
import connectToDatabase from "./database/mongodb";

const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

// Router Middleares
app.use("/api/v1/task", taskRouter)
app.use("/api/v1/auth", authRouter)

app.get("/", (req, res) => {
  res.send("Welcome to Taskie API");
});

app.listen(PORT, async() => {
  console.log(`Taskie API is running on http://localhost:${PORT}`);

  await connectToDatabase()
});
