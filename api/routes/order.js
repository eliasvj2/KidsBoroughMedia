import express from "express";
import { getAllOrders, addOrderToUser, orderByUserId, updateOrderById, deleteOrderById, generate } from "../controllers/order.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();


//middleware to verify the access
// router.use(verifyJWT);

router.get("/", getAllOrders);
router.post("/orders", orderByUserId);
router.get("/generate", generate);
router.post("/", addOrderToUser);
router.put("/:id", updateOrderById);
router.delete("/:id", deleteOrderById)

export default router;