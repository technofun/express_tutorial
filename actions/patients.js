import { v4 as u_id } from "uuid";

const patients = [
  {
    id: 1,
    name: "ali",
    age: 28,
  },
  {
    id: 2,
    name: "Numan Ijaz",
    age: 23,
  },
  {
    id: 3,
    name: "Hussnain Mohsin",
    age: 24,
  },
];

export const Patients = (req, res) => {
  res.send(patients);
};

export const AddPatient = (req, res) => {
  const data = req.body;
  const paramdata = req.params;
  const uniq = u_id();
  const _patient = { ...data, id: uniq, param: paramdata };
  patients.push(_patient);
  res.status(201).send(patients);
};

// export const SinglePatient = (req, res) => {
//   res.send("single Patient");
// };
// export const DeletePatient = (req, res) => {
//   res.send("Delete Patient");
// };
