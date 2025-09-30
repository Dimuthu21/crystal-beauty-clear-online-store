import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Student from "./models/student.js";
import studentRouter from "./routes/studentRouter.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import jwt from "jsonwebtoken";

// ✅ Initialize express app
const app = express();

// Middleware (choose one option)
app.use(bodyParser.json());
app.use((req, res, next) => {
  const tokenString = req.header("Authorization");
  if (tokenString != null) {
    const token = tokenString.replace("Bearer ", "");
    console.log(token);

    jwt.verify(token, "hgjkstf8976@", (err, decoded) => {
      if (decoded != null) {
        console.log(decoded);
        req.user = decoded;
        next();
      } else {
        console.log("Invalid Token");
        res.status(403).json({ message: "Unauthorized Access" });
      }
    });
  } else {
    next();
  }
});

//  Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:123@cluster0.ih2g2gf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log(" Connected to database"))
  .catch((err) => console.error(" Error connecting to database:", err));

app.use("/students", studentRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

//  Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
