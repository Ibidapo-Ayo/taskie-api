import { Router } from "express";

const taskRouter = Router();

taskRouter.post("/", (req, res) => {
  res.send("Tasks created");
});

taskRouter.get("/", (req, res) => {
  res.send("Getting all task");
});

taskRouter.get("/:id", (req, res) => {
  res.send(`Getting a task with the ID ${req.params.id}`);
});

taskRouter.put("/:id", (req, res) => {
  res.send(`Task ${req.params.id} is modified successfully`);
});

taskRouter.delete("/:id", (req, res) => {
  res.send("Task deleted successfully");
});

export default taskRouter;
