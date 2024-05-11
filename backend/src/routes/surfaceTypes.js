const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const surfaceTypes = await pool.query('SELECT * FROM SurfaceTypes');
        res.json(surfaceTypes.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const surfaceType = await pool.query('SELECT * FROM SurfaceTypes WHERE surfaceTypeID = $1', [id]);
        if (surfaceType.rows.length === 0) {
            return res.status(404).json({ message: 'Surface type not found' });
        }
        res.json(surfaceType.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const newSurfaceType = await pool.query('INSERT INTO SurfaceTypes (name) VALUES ($1) RETURNING *', [name]);
        res.status(201).json(newSurfaceType.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedSurfaceType = await pool.query('UPDATE SurfaceTypes SET name = $1 WHERE surfaceTypeID = $2 RETURNING *', [name, id]);
        if (updatedSurfaceType.rows.length === 0) {
            return res.status(404).json({ message: 'Surface type not found' });
        }
        res.json(updatedSurfaceType.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSurfaceType = await pool.query('DELETE FROM SurfaceTypes WHERE surfaceTypeID = $1 RETURNING *', [id]);
        if (deletedSurfaceType.rows.length === 0) {
            return res.status(404).json({ message: 'Surface type not found' });
        }
        res.json({ message: 'Surface type deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;