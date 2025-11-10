const express = require('express');
const cors = require('cors');
const mongodb = require('./data/database');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
const port = process.env.PORT || 3000;

// CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Middleware to parse JSON
app.use(express.json());

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and Node running on port ${port}`);
    });
  }
});
