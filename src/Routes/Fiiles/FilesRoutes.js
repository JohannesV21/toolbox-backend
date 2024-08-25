import { Router } from "express";
import { getFilesData } from "../../Controllers/Files/FilesController.js";

const router = Router();

router.get("/data", getFilesData);

export default router;
