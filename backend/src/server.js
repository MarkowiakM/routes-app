require("dotenv").config();
const express = require('express')
const port = 3000;

const setupRoutes = require('./setup');
const surfaceTypesRoutes = require('./routes/surfaceTypes');
const pointsRoutes = require('./routes/points');
const pathsRoutes = require('./routes/paths');
const pathPointsRoutes = require('./routes/pathPoints');

const app = express()
app.use(express.json())

app.use('/setup', setupRoutes);

app.use('/surface-types', surfaceTypesRoutes);
app.use('/points', pointsRoutes);
app.use('/paths', pathsRoutes);
app.use('/path-points', pathPointsRoutes);

app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

app.listen(port, () => console.log(`Server has started on port: ${port}`))