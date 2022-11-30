import express from "express";
import { getUser } from "../Controllers/UserController.js"

const router = express.Router();

router.get('/:id', getUser)
hola
export default router;