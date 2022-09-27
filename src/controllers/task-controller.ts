import { Request, Response } from "express";

const getAllTasks = (req: Request, res: Response) => {
  console.log("Get route");
  res.send("Get route");
};

const createTask = (req: Request, res: Response) => {
  console.log("Create route");
  res.send("Create route");
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
