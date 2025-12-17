import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from 'cors';
import userRoute from './route/user.route.js';

dotenv.config();

const app = express();

app.use(cors());
const PORT = process.env.PORT || 1207;
const mongoDBURI = process.env.mongoDBURI;


// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBURI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDB();


//definning routes

app.use(express.json());
app.use("/book" , bookRoute);
app.use("/user" , userRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
