import { Router } from "express";
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/task-controller";

const router = Router();

router.route("/").get(getAllTasks).post(createTask);

// add routes with parameters
router.route("/:id").patch(updateTask).delete(deleteTask).get(getTask);

export default router;
