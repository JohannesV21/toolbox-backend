import { Router } from "express";
import { FormattedFilesController } from "../../Controllers/Files/FormattedFilesController.js";
import { FilesListController } from "../../Controllers/Files/FileListController.js";

const router = Router();

router.get("/data", FormattedFilesController);
router.get("/list", FilesListController);

export default router;
