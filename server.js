const express = require('express');
const sequelize = require('./uitls/db.js');
const userRoutes = require('./routes/user.route.js');
const User = require('./models/user.model.js');
require('dotenv').config()

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// Use user routes
app.use('/api', userRoutes);

// Synchronize the models with the database
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
