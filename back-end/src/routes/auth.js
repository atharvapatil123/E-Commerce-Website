const express = require("express");
const router = express.Router();
const { signup, requireSignin } = require("../controller/auth");
const { signin } = require("../controller/auth");

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/profile", requireSignin,(req, res) => {
  res.status(200).json({
    user: "profile",
  });
});

module.exports = router;
