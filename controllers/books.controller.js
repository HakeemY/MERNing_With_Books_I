import Book from "../models/books.model.js";

// create new
async function createBook(req, res) {
  try {
    const newBook = await Book.create(req.body);
    res.json(newBook);
  } catch (error) {
    console.log("CREATE error", error);
    res.status(400).json(error);
  }
}

// READ ALL

async function readAll(req, res) {
  try {
    const newBook = await Book.find();
    res.json(newBook);
  } catch (error) {
    console.log("READALL error", error);
    res.status(400).json(error);
  }
}

// READ ONE

async function getOneBook(req, res) {
  try {
    const foundBook = await Book.findById(req.params.id);
    res.json(foundBook);
  } catch (error) {
    console.log("SEVER CONTROLLER error", error);
    res.status(400).json(error);
  }
}

// UPDATE
async function updateOneBook(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedBook);
  } catch (error) {
    console.log("SEVER CONTROLLER error", error);
    res.status(400).json(error);
  }
}
// DELETE

async function deleteOneBook(req, res) {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (error) {
    console.log("SEVER CONTROLLER error", error);
    res.status(400).json(error);
  }
}

export { createBook, readAll, getOneBook, updateOneBook, deleteOneBook };
