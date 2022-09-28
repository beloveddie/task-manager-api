import { Request, Response } from "express";
import { Task } from "../models/Task";

const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find({});
  if (!tasks) throw new Error("Unable to get all tasks.");
  res.status(200).json({ success: true, tasks });
};

const createTask = async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  if (!task) throw new Error("Task creation didn't go through.");
  res.status(201).json({ success: true, task });
};

const updateTask = (req: Request, res: Response) => {
  console.log("Update task route");
  res.send("Update task route");
};

const deleteTask = (req: Request, res: Response) => {
  console.log("Delete task route");
  res.send("Delete task route");
};

const getTask = (req: Request, res: Response) => {
  console.log("Get specific route");
  res.send("Get specific route");
};

export { getAllTasks, createTask, updateTask, deleteTask, getTask };
