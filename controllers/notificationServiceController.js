const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'http://localhost:5004/api/notifications';

router.post('/', (req, res) => {
  axios.post(`${BASE_URL}`, req.body)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

router.post('/send-email', (req, res) => {
  axios.post(`${BASE_URL}/send-email`, req.body)
    .then(response => res.status(response.status).send(response.data))
    .catch(err => res.status(err.response?.status || 500).send(err.response?.data || err.message));
});

module.exports = router;
