import express from "express";
import { getAllOrders, createOrder, updateOrderById, deleteOrderById } from "../controllers/order.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();


//middleware to verify the access
router.use(verifyJWT);

router.get("/", getAllOrders);
router.post("/", createOrder);
router.put("/:id", updateOrderById);
router.delete("/:id", deleteOrderById)

export default router;