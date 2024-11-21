const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'http://localhost:5002/api/tickets';

// Create a new ticket
router.post('/', (req, res) => {
  axios.post(`${BASE_URL}`, req.body)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Get all tickets
router.get('/', (req, res) => {
  axios.get(`${BASE_URL}`)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Search tickets by query
router.get('/search', (req, res) => {
  axios.get(`${BASE_URL}/search`, { params: req.query })
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Get paginated tickets
router.get('/paginate', (req, res) => {
  axios.get(`${BASE_URL}/paginate`, { params: req.query })
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Filter tickets by status
router.get('/filter', (req, res) => {
  axios.get(`${BASE_URL}/filter`, { params: req.query })
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Count all tickets
router.get('/count', (req, res) => {
  axios.get(`${BASE_URL}/count`)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Get a ticket by ID
router.get('/:id', (req, res) => {
  axios.get(`${BASE_URL}/${req.params.id}`)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Update a ticket by ID
router.put('/:id', (req, res) => {
  axios.put(`${BASE_URL}/${req.params.id}`, req.body)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

// Delete a ticket by ID
router.delete('/:id', (req, res) => {
  axios.delete(`${BASE_URL}/${req.params.id}`)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

module.exports = router;
