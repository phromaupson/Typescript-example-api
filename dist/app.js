"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const exampleRoutes_1 = __importDefault(require("./routes/exampleRoutes"));
const app = (0, express_1.default)(); //เก็บfunction express ไว้ใน app
app.use("/", exampleRoutes_1.default);
app.use(() => {
    throw (0, http_errors_1.default)(404, "not found");
}); //ให้แอพใช้ http error
const errorHandler = (err, req, res, next) => {
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
