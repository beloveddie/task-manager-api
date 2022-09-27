import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/task-controller";

const router = Router();

router.route("/").get(getAllTasks).post(createTask);

// add routes with parameters
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
