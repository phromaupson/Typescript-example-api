import express, { ErrorRequestHandler } from "express";
import mongoose from "mongoose";
import createHttpError from "http-errors";
import studentRoute from "./routes/StudentRoutes";
import cors from "cors";

const app = express(); //เก็บfunction express ไว้ใน app

app.use(express.json());
app.use(cors());

app.use("/api", studentRoute);

mongoose
  .connect(
    "mongodb+srv://kamkon007:kamkon007@cluster0.wourw.mongodb.net/Student_example?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected");
    app.listen(9000, () => {
      console.log("server started on port 9000");
    }); //สั่ง start server
  });
