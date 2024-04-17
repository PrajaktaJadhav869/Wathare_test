const express = require('express');
const { MongoClient } = require('mongodb');
const sampleDataController = require('./controllers/sampleDataController');

const app = express();
const PORT = process.env.PORT || 8082;

const uri = 'mongodb://localhost:27017'
const dbName = 'Wathare';

const client = new MongoClient(uri);
 
app.use('/api/sampledata', sampleDataController);

async function startServer() {
    try {
        await client.connect();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

startServer();
