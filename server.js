const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

// Initialize express
const app = express();
// Define the port for cloud and local environment
const PORT = process.env.PORT || 3001;

// Middleware for json response and reading URL parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for the routers.
app.use(routes);

// sync sequelize models to the database, then turn on the server
// After the database is connected the server will start listening on the port
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

