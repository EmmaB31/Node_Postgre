const { Pool } = require('pg')
const express = require('express');
const router = express.Router();

const pool = new Pool();

// GET all users
router.get('/', (req, res) => {
    pool
    .query('SELECT * FROM users;')
    .then(({rows}) => res.json(rows))
    .catch(e => res.sendStatus(500))
});
 
// GET /:id single user

// POST Create new user

// PUT /:id Edit one user with id

//DELETE /:id Delete user with id
module.exports = router