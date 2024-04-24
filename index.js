const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const categoriesRoutes = require('./app/routes/categories')
const topicsRoutes = require('./app/routes/topics')
const userRoutes = require('./app/routes/user')

const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./config/db')

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
  transports: ["polling"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Paths
app.use("/api/v1/", categoriesRoutes)
app.use("/api/v1/", topicsRoutes)
app.use("/api/v1/", userRoutes)

// Init server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
