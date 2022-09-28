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

const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask) throw new Error("Task update didn't go through.");
  res.status(200).json({ success: true, updatedTask });
};

const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedTask = await Task.findByIdAndDelete(id);
  if (!deletedTask) throw new Error("Task deletion didn't go through.");
  res.status(200).json({ success: true, deletedTask });
};

const getTask = (req: Request, res: Response) => {
  console.log("Get specific route");
  res.send("Get specific route");
};

export { getAllTasks, createTask, updateTask, deleteTask, getTask };
