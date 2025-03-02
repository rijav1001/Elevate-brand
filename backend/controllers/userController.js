const User = require('../models/User');

exports.submitForm = async (req, res) => {
  try {
    const { name, email, pricingPlan } = req.body;
    const user = new User({ name, email, pricingPlan });
    await user.save();
    res.status(201).json({ message: 'Form submitted successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
