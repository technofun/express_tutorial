import express from "express";
import dotenv from "dotenv";
import PatientRoutes from "./routes/patients.js";
import bodyParser from "body-parser";
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/patients", PatientRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

let PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`my server is running on Port ${PORT}`));
