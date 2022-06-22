import express from "express";
import { Patients ,AddPatient} from "../actions/patients.js";
const route = express.Router();

route.get("/", Patients);
route.post("/addpatient/:pratice_name", AddPatient);


// route.get("/singlePatient", SinglePatient);
// route.get("/deletePatient", DeletePatient);

export default route;
