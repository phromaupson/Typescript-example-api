import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  name: string;
  room: string;
  mobile: string;
  description: string;
} //กำหนด type ตอนเรียกใช้หรือส่งข้อมูล

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true, //จำเป็นต้องใส่
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

export default model<IUser>("User", UserSchema);
