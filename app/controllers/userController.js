const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { user } = require('../models/user');

exports.userController = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role
    });
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).send({error : error});
  }
}

exports.userLoginController = async (req, res) => {
  try {
    const currentUser = await user.findOne({ email: req.body.email });

    if (!currentUser) {
      return res.status(404).send('User not found');
    }

    const validPass = await bcrypt.compare(req.body.password, currentUser.password);

    if (!validPass) {
      return res.status(400).send('Invalid password');
    }

    const token = jwt.sign({ _id: currentUser._id, role: currentUser.role }, 'SECRET', { expiresIn: '24h' });
    res.header('auth-token', token).send(token);

  } catch (error) {
    res.status(500).send(error);
  }
}