import { RequestHandler, Response, Request } from "express";
import User from "../model/User";

export const GetStudent: RequestHandler = (req: Request, res: Response) => {
  User.find({}, (err, result) => {
    if (err) {
      return res.json(err);
    }

    return res.json(result);
  });
};

export const GetOneStudent: RequestHandler = (req: Request, res: Response) => {
  User.findOne({ name: req.params.name }, (err: any, result: any) => {
    if (err) {
      return res.json(err);
    }
    if (!result) {
      return res.json({ err: "User not found" });
    }

    return res.json(result);
  });
};

export const CreateStudent: RequestHandler = (req: Request, res: Response) => {
  const user = req.body;

  const newUser = new User(user);

  newUser.save((err, result) => {
    if (err) {
      return res.json({ err: "User already exist" }); //ข้อมูลซ้ำ
    }
    return res.json({ msg: "User created" }); //ข้อมูลเข้าสำเร็จ
  });
};

export const UpdateStudent: RequestHandler = (req: Request, res: Response) => {
  User.findOneAndUpdate(
    { name: req.params.name },
    {
      $set: req.body, //เปลี่ยนแปลงที่ได้รับมาจาก req.body
    },
    { new: true }, //ขอแสดงข้อมูลใหม่ที่อัพเดตแล้ว
    (err: any, result: any) => {
      if (err) {
        return res.json(err);
      }
      if (!result) {
        return res.json({ err: "User not found" });
      }

      return res.json({ msg: "User updated" });
    }
  );
};

export const DeleteStudent: RequestHandler = (req: Request, res: Response) => {
  User.findOneAndDelete({ name: req.params.name }, (err: any, result: any) => {
    if (err) {
      return res.json(err);
    }
    if (!result) {
      return res.json({ err: "User not found" });
    }
    return res.json({ msg: "User Deleted" });
  });
};
