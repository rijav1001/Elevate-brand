const express = require('express');
const { submitForm } = require('../controllers/userController');
const validateUser = require('../middleware/validationMiddleware');

const router = express.Router();

router.post('/submit', validateUser, submitForm);

module.exports = router;
