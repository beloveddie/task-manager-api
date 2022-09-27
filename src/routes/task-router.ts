import { Router } from "express";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    console.log("Get route");
    res.send("Get route");
  })
  .post((req, res) => {
    console.log("Post route");
    res.send("Post route");
  });

export default router;
