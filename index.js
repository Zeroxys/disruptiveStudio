const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const categoriesRoutes = require('./app/routes/categories')
const topicsRoutes = require('./app/routes/topics')
const userRoutes = require('./app/routes/user')

const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/db')

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Paths
app.use("/api/v1/", categoriesRoutes)
app.use("/api/v1/", topicsRoutes)
app.use("/api/v1/", userRoutes)

// Init server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
