require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
connect();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));