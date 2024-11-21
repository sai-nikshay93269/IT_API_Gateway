const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const dotenv = require('dotenv');
const authMiddleware = require('./middleware/authMiddleware'); // Import auth middleware

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Protected Routes Middleware
// Protect all routes except `/register` and `/login`
app.use((req, res, next) => {
  const openRoutes = ['/api/auth/register', '/api/auth/login'];
  if (openRoutes.includes(req.path)) {
    return next();
  }
  authMiddleware(req, res, next);
});

// Routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
