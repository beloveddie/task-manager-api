import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  console.log("Get route");
  res.send("Get route");
});

export default router;
