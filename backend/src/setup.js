const express = require('express');
const pool = require('./db');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS SurfaceTypes (
            SurfaceTypeID SERIAL PRIMARY KEY,
            Name VARCHAR(50) NOT NULL
        )`);

        await pool.query(`CREATE TABLE IF NOT EXISTS Points (
            PointID SERIAL PRIMARY KEY,
            Latitude DECIMAL(9, 6) NOT NULL,
            Longitude DECIMAL(9, 6) NOT NULL
        )`);

        await pool.query(`CREATE TABLE IF NOT EXISTS Paths (
            PathID SERIAL PRIMARY KEY,
            SurfaceTypeID INT,
            FOREIGN KEY (SurfaceTypeID) REFERENCES SurfaceTypes(SurfaceTypeID)
        )`);

        await pool.query(`CREATE TABLE IF NOT EXISTS PathPoints (
            PathID INT,
            PointID INT,
            PointOrder INT,
            PRIMARY KEY (PathID, PointID),
            FOREIGN KEY (PathID) REFERENCES Paths(PathID),
            FOREIGN KEY (PointID) REFERENCES Points(PointID)
        )`);

        res.status(200).json({ message: 'Successfully created database schema' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
