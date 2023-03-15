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
router.get('/:id', (req, res) => {
    const id = req.params.id
    pool
    .query('SELECT * FROM users WHERE id=$1', [id])
    .then(({rows}) => res.json(rows))
    .catch(e => res.sendStatus(500))
})

// POST Create new user

// PUT /:id Edit one user with id

//DELETE /:id Delete user with id
module.exports = router