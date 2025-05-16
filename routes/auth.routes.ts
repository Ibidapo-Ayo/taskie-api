import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send("Account created successfully");
});

authRouter.post("/sign-in", (req, res) => {
  res.send("User loggedin successfully");
});


export default authRouter