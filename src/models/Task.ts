import { Schema } from "mongoose";

const TaskSchema = new Schema({
  title: String,
  assignee: String,
  startDate: Date,
  dueDate: Date,
  todo: Boolean,
  doing: Boolean,
  done: Boolean,
});
