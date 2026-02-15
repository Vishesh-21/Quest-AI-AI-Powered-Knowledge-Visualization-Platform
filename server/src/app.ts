import express, { type Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route";

const app: Application = express();

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOption));

//routes
// ==== routes for google auth ====
app.use("/api/auth", authRoutes);

app.use((req, res, next) => {
  res.removeHeader("Cross-Origin-Opener-Policy");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

export default app;
