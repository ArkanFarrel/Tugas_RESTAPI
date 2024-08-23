import express from "express";
import { createRumah, deleteRumah, getRumah, getRumahById, updateRumah } from "../controllers/propertyController.js";
const router = express.Router();

// router.get("/");
router.get("/", getRumah);
router.get("/find", getRumahById);
router.post("/create", createRumah);
router.put("/update", updateRumah);
router.delete("/delete", deleteRumah);

export default router;