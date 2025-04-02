import express from "express";
import { getAllDocuments, addDocument, documentByUserId, updateDocumentById, deleteDocumentById, generate } from "../controllers/document.js";
import { verifyJWT } from "../middleware/verifyJWT.js";

const router = express.Router();


//middleware to verify the access
// router.use(verifyJWT);

router.get("/", getAllDocuments);
router.get("/document:userId", documentByUserId);
router.get("/generate", generate);
router.post("/", addDocument);
router.put("/:id", updateDocumentById);
router.delete("/:id", deleteDocumentById)

export default router;