import express from "express";
import { getTracking, createTracking, updateTracking, deleteTracking } from "../controllers/tracking.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

//middleware to verify the access
// router.use(verifyJWT);

router.get("/", getTracking);
router.post("/", createTracking);
router.patch("/:id", updateTracking);
router.delete("/:id",deleteTracking);

export default router;