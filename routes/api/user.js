const express = require("express");
const router = express.Router();
const auth = require('../../helpers/auth')
// Models and Helpers
const User = require("../../models/users");

router.get("/", async (req, res) => {
  const users = await User.find().populate("courses");
  res.send(users);
});
router.post('/login',auth,async (req, res) => {
 
})


module.exports = router;
