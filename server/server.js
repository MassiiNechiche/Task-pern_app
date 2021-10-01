const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server running on port 5000");
});
