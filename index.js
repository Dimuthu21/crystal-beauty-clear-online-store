import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Student from "./models/student.js";
import studentRouter from "./routes/studentRouter.js";
import userRouter from "./routes/userRoutes.js";

// ✅ Initialize express app

const app = express();

// Middleware (choose one option)
app.use(bodyParser.json());




//  Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:123@cluster0.ih2g2gf.mongodb.net/studentdb?retryWrites=true&w=majority"
  )
  .then(() => console.log(" Connected to database"))
  .catch((err) => console.error(" Error connecting to database:", err));

app.use("/students",studentRouter)
app.use("/products",productRouter)
app.use("/users",userRouter)





//  Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

