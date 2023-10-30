const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  const { code } = req.query;
  console.log(code);
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
