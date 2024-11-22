const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'http://host.docker.internal:5001/api/auth';

// Register a new user
router.post('/register', (req, res) => {
  axios.post(`${BASE_URL}/register`, req.body)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Login a user
router.post('/login', (req, res) => {
  axios.post(`${BASE_URL}/login`, req.body)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Logout a user
router.post('/logout', (req, res) => {
  axios.post(`${BASE_URL}/logout`, req.body)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Reset password (protected route)
router.post('/reset-password', (req, res) => {
  axios.post(`${BASE_URL}/reset-password`, req.body, {
    headers: { Authorization: req.headers.authorization },
  })
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Get user details by ID (protected route)
router.get('/user/:id', (req, res) => {
  axios.get(`${BASE_URL}/user/${req.params.id}`, {
    headers: { Authorization: req.headers.authorization },
  })
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Get all users (protected route)
router.get('/users', (req, res) => {
  axios.get(`${BASE_URL}/users`, {
    headers: { Authorization: req.headers.authorization },
  })
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

module.exports = router;
