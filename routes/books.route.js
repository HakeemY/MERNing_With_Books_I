import { Router } from "express";
import {
  createBook,
  readAll,
  getOneBook,
  updateOneBook,
  deleteOneBook,
} from "../controllers/books.controller.js";
const router = Router();

router.route("/books").get(readAll).post(createBook);

router
  .route("/books/:id")
  .get(getOneBook)
  .put(updateOneBook)
  .delete(deleteOneBook);

export default router;
