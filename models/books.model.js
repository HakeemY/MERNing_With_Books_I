import { model, Schema } from "mongoose";
const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required!"],
      minlength: [2, "title must be at least 2 characters long!"],
      maxlength: [255, "title must be less than 255 characters long"],
    },
    author: {
      type: String,
      required: [true, "author is required!"],
      minlength: [2, "author must be at least 5 characters long!"],
      maxlength: [255, "author must be less than 255 characters long"],
    },
    pages: {
      type: Number,
      required: [true, "pages is required!"],
      min: [1, "Pages must be at least 1"],
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;
