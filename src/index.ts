import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./helpers/connectToDb";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.static("./src/views"));

(async () => {
  // connect to database
  try {
    await connectDB(process.env.MONGO_DB_URI!);
    console.log("Successfully connected to DB");
    app.listen(port, () => {
      console.log(`[server]: Server is running at https://localhost:${port}`);
    });
  } catch (error) {
    console.error("Something went wrong" + error);
  }
})();
