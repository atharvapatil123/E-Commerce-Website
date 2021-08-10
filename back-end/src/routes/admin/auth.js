const express = require("express");
const router = express.Router();
const { signup, requireSignin } = require("../../controller/admin/auth");
const { signin } = require("../../controller/admin/auth");

router.post("/admin/signup", signup);

router.post("/admin/signin", signin);

// router.post("/profile", requireSignin,(req, res) => {
//   res.status(200).json({
//     user: "profile",
//   });
// });

module.exports = router;
