import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h3>Task manger API with TS");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
