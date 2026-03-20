import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello, welcome to the Classroom API!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
