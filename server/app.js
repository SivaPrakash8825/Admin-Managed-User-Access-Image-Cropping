const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const adminlog = require("./schema/adminlog");

app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyparser.json({ limit: "50mb" }));

app.use(
  cors({
    origin: "http://localhost:5500",
    credentials: true,
  })
);
async function checkConnection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Imagecropping");
    console.log("Connected");
  } catch (error) {
    console.log("Not Connected :", error.message);
  }
}
checkConnection();

app.post("/check", async (req, res) => {
  const { data } = req.body;
  console.log(data);
  try {
    const val = await adminlog.findOne({ name: data.name, pass: data.pass });
    if (val) {
      return res.status(200).send({ msg: "exist" });
    } else {
      return res.status(200).send({ msg: "not" });
    }
  } catch (e) {
    console.log(e);
  }

  res.send({ msg: "siva" });
});

app.use("/createId", require("./router/adminlogin"));

app.listen(3030, () => {
  console.log("listening");
});
