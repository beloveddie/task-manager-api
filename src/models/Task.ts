import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title of a task must be specified."],
  },
  assignee: {
    type: String,
    required: [true, "Make sure a task is assigned to someone."],
  },
  startDate: {
    type: Date,
    required: [true, "We need to know when to kick-off."],
  },
  dueDate: {
    type: Date,
    required: [true, "There should always be an expected end."],
  },
  todo: { type: Boolean, default: true },
  doing: { type: Boolean, default: false },
  done: { type: Boolean, default: false },
});

export const Task = model("Task", TaskSchema);
