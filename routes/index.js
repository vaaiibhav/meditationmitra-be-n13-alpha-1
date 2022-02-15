const router = require("express").Router();
const keys = require("../config/keys");
const userRoutes = require("./api/user");
const courseRoutes = require("./api/course");

// api routes

router.use("/user", userRoutes);
router.use("/course", courseRoutes);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Meditation Mitra Backend' });
});
module.exports = router;
