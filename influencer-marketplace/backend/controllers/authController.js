const User = require('../models/User'); // User model for MongoDB
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
// Register User
exports.registerUser = async (req, res) => {
    const { name, username, email, password } = req.body;
  
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Save user to database
      const newUser = new User({
        name,
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
