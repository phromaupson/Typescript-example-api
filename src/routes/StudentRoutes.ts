import { Router } from "express";
import {
  GetStudent,
  CreateStudent,
  GetOneStudent,
  UpdateStudent,
  DeleteStudent,
} from "../controllers/StudentControllers";

const router: Router = Router();

router.get("/", GetStudent);
router.get("/:name", GetOneStudent);
router.post("/add", CreateStudent);
router.put("/update/:name", UpdateStudent);
router.delete("/delete/:name", DeleteStudent);

export default router;
