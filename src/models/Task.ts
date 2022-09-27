import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: String,
  assignee: String,
  startDate: Date,
  dueDate: Date,
  todo: Boolean,
  doing: Boolean,
  done: Boolean,
});

export const Task = model("Task", TaskSchema);
