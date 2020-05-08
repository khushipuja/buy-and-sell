const router = require("express").Router();
const { User } = require("../models/users");
const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  try{
    if (!user)
    return res.status(400).send("This User is not Registerd, Try Signup");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    res.status(400).send("User With Given Password Not Registerd");

  const token = jwt.sign(
    { _id: user._id, username: user.username },
    "Secretkey"
  );

  res.header("token", token).send(token);
  }catch(err)
  {
    console.log(err);
    
  }
 
});

const validate = user => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .max(30)
      .required()
  });

  return schema.validate(user);
};

module.exports = router;
