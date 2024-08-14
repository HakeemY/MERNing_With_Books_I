import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/books.route.js";

const app = express();

// ** MIDDLEWARE **
app.use(express.json(), cors());
app.use("/api", router);

dotenv.config();
const PORT = process.env.PORT;

const DB_NAME = "books";
dbConnect(DB_NAME);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
