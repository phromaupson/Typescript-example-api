import express, { ErrorRequestHandler } from "express";
import mongoose from "mongoose";
import createHttpError from "http-errors";
import studentRoute from "./routes/StudentRoutes";
import cors from "cors";

const app = express(); //เก็บfunction express ไว้ใน app

app.use(express.json());
app.use(cors());

app.use("/api", studentRoute);

app.use(() => {
  throw createHttpError(404, "not found");
}); //ให้แอพใช้ http error

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err.message, err.statusCode);
  if (res.headersSent) {
    return next(err);
  }
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "An Unknown Error" });
}; //จัดรูปแบบ errorHandler ให้อยู่ใน ErrorRequestHandler

app.use(errorHandler);
//เชื่อมต่อ database
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
