const express = require('express');
const pool = require('./db');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS SurfaceTypes (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL
        )`);

        await pool.query(`CREATE TABLE IF NOT EXISTS Points (
            id SERIAL PRIMARY KEY,
            lat DECIMAL(9, 6) NOT NULL,
            lng DECIMAL(9, 6) NOT NULL
        )`);

        await pool.query(`CREATE TABLE IF NOT EXISTS Paths (
            id SERIAL PRIMARY KEY,
            surfaceTypeID INT,
            FOREIGN KEY (surfaceTypeID) REFERENCES SurfaceTypes(id)
        )`);

        await pool.query(`CREATE TABLE IF NOT EXISTS PathPoints (
            pathID INT,
            pointID INT,
            pointOrder INT,
            PRIMARY KEY (pathID, pointID),
            FOREIGN KEY (pathID) REFERENCES Paths(id),
            FOREIGN KEY (pointID) REFERENCES Points(id)
        )`);

        res.status(200).json({ message: 'Successfully created database schema' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
