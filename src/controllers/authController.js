const authService = require("../services/authService");

const register = async (req, res, next) => {
  try {
    console.log("BODY:", req.body);
    const { email, password } = req.body;
    const user = await authService.register(email, password);

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: { id: user.id, email: user.email },
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { token } = await authService.login(email, password);

    res.json({
      status: "success",
      message: "Login successful",
      data: { token },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
