import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";

const app = express(); //เก็บfunction express ไว้ใน app

app.use("/", exampleRoute);

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
app.listen(9000, () => {
  console.log("server started on port 9000");
}); //สั่ง start server
