const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json()); // untuk baca req body json
app.use(express.urlencoded({ extended: false })); // untuk baca req body urlencoded

app.use('/api/schedules', require('./routes/scheduleRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
