const express = require("express");
const router = express.Router();
const Email = require("../model/email");

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    const mail = new Email({
      email,
    });
    await mail.save();
    return res.status(200).send({ message: "posted email succesfully" });
  } catch (e) {
    return res.status(201).send({ message: "Email is already registered" });
  }
});

module.exports = router;
