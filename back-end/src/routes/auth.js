const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { signup, requireSignin } = require("../controller/auth");
const { signin } = require("../controller/auth");

router.post(
  "/signup",
  [
    check("firstName").notEmpty().withMessage("First Name is required"),
    check("lastName").notEmpty().withMessage("Last Name is required"),
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({ min: 6 }).withMessage("Password is required"),
  ],
  signup
);

router.post("/signin", signin);

router.post("/profile", requireSignin, (req, res) => {
  res.status(200).json({
    user: "profile",
  });
});

module.exports = router;
