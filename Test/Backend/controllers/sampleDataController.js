const express = require('express');
const { MongoClient } = require('mongodb');

const router = express.Router();
const uri = 'mongodb://localhost:27017';
const dbName = 'Wathare';

const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('Sample');
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching sample data:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.close();
    }
});

module.exports = router;