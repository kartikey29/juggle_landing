require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const dbConnect = require("./config/dbConfig");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dbConnect();

const waitlist = require("./routes/waitlist");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use("/waitlist", waitlist);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
