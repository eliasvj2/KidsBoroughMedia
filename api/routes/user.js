import express from "express";
import { getAllUsers, createUser, updateUser, deleteUser } from "../controllers/user.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();

//middleware to verify the access
// router.use(verifyJWT);

router.get("/", getAllUsers);
router.post("/", createUser);
router.patch("/", updateUser);
router.delete("/",deleteUser)

export default router;