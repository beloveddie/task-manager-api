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

// add routes with parameters
router
  .route("/:id")
  .get((req, res) => {
    console.log("Get specific route");
    res.send("Get specific route");
  })
  .patch((req, res) => {
    console.log("Patch route");
    res.send("Patch route");
  })
  .delete((req, res) => {
    console.log("Delete route");
    res.send("Delete route");
  });

export default router;
