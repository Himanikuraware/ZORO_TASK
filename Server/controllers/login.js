const Login = require("../models/login");

const loginUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const login = new Login({ email: email, password: password });
  login
    .save()
    .then((result) => {
      res.json("Login  Successfully");
    })
    .catch((err) => console.log(err));
};

exports.loginUser = loginUser;
