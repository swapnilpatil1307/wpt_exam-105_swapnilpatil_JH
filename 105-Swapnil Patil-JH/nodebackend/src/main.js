const express = require("express");
const app = express();
app.use(express.json());

let cors = require("cors");
app.use(cors());

const { adduser, selectuser } = require("./user.js");
app.get("/user", async (req, res) => {
  const list = await selectuser();
  res.json(list);
});

app.post("/adduser", async (req, res) => {
  const list = req.body;
  await adduser(list);
  res.json({ message: "record added" });
});

app.listen(3000, () => {
  console.log("connection successsful");
});
