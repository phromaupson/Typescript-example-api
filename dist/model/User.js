"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true, //ห้ามซ้ำ
    },
    room: {
        type: String,
        required: true, //จำเป็นต้องใส่
    },
    mobile: {
        type: String,
        required: true, //จำเป็นต้องใส่
    },
    description: {
        type: String,
        required: true, //จำเป็นต้องใส่
    },
}); //รูปแบบของฐานข้อมูลว่ามีอะไรบ้าง
exports.default = (0, mongoose_1.model)("User", UserSchema);
