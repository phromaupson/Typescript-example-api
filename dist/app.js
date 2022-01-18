"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const StudentRoutes_1 = __importDefault(require("./routes/StudentRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)(); //เก็บfunction express ไว้ใน app
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", StudentRoutes_1.default);
mongoose_1.default
    .connect("mongodb+srv://kamkon007:kamkon007@cluster0.wourw.mongodb.net/Student_example?retryWrites=true&w=majority")
    .then(() => {
    console.log("Database Connected");
    app.listen(9000, () => {
        console.log("server started on port 9000");
    }); //สั่ง start server
});
