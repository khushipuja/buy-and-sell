const router = require("express").Router();
const { User, validate } = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).send("This User is Already Registerd, Try Login");

  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  try {
    await user.save();
    res.send({
      user: {
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
