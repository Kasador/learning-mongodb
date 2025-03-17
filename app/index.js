const express = require('express');
const app = express();
const routeHandler = require('./routes');

app.get('/', (req, res) => { // main route to url/
    res.status(200).json({sucess: true, message: 'API is running...'});
});

app.use('/api/v1', routeHandler); // use middleware to have routes for /api/v1/

module.exports = app;