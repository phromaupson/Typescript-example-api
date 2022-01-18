"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudent = exports.UpdateStudent = exports.CreateStudent = exports.GetOneStudent = exports.GetStudent = void 0;
const User_1 = __importDefault(require("../model/User"));
const GetStudent = (req, res) => {
    User_1.default.find({}, (err, result) => {
        if (err) {
            return res.json(err);
        }
        return res.json(result);
    });
};
exports.GetStudent = GetStudent;
const GetOneStudent = (req, res) => {
    User_1.default.findOne({ name: req.params.name }, (err, result) => {
        if (err) {
            return res.json(err);
        }
        if (!result) {
            return res.json({ err: "User not found" });
        }
        return res.json(result);
    });
};
exports.GetOneStudent = GetOneStudent;
const CreateStudent = (req, res) => {
    const user = req.body;
    const newUser = new User_1.default(user);
    newUser.save((err, result) => {
        if (err) {
            return res.json({ err: "User already exist" }); //ข้อมูลซ้ำ
        }
        return res.json({ msg: "User created" }); //ข้อมูลเข้าสำเร็จ
    });
};
exports.CreateStudent = CreateStudent;
const UpdateStudent = (req, res) => {
    User_1.default.findOneAndUpdate({ name: req.params.name }, {
        $set: req.body, //เปลี่ยนแปลงที่ได้รับมาจาก req.body
    }, { new: true }, //ขอแสดงข้อมูลใหม่ที่อัพเดตแล้ว
    (err, result) => {
        if (err) {
            return res.json(err);
        }
        if (!result) {
            return res.json({ err: "User not found" });
        }
        return res.json({ msg: "User updated" });
    });
};
exports.UpdateStudent = UpdateStudent;
const DeleteStudent = (req, res) => {
    User_1.default.findOneAndDelete({ name: req.params.name }, (err, result) => {
        if (err) {
            return res.json(err);
        }
        if (!result) {
            return res.json({ err: "User not found" });
        }
        return res.json({ msg: "User Deleted" });
    });
};
exports.DeleteStudent = DeleteStudent;
