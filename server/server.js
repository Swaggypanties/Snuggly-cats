const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

// App initialization
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Serve React frontend
const reactBuildPath = path.join(__dirname, '../client/build'); // Path to React build folder
app.use(express.static(reactBuildPath));

// Connection to DB
const user = process.env.MONGO_USERID;
const pw = process.env.MONGO_PW;

const uri =
  'mongodb+srv://' +
  user +
  ':' +
  pw +
  '@cluster0.51qps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// API Routes

// Retrieve all entries
app.get('/api/getall', async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const collection = client.db('sample_mflix').collection('snuggle board');

    const entries = await collection.find().toArray();

    res.json(entries);
  } catch (e) {
    console.error(e);
    res.status(500).send('Error retrieving entries from MongoDB');
  } finally {
    await client.close();
  }
});

// Add a new entry
app.post('/api/add', (req, res) => {
  const client = new MongoClient(uri);

  async function connectAndAdd() {
    try {
      await client.connect();
      const collection = client.db('sample_mflix').collection('snuggle board');

      const newEntry = {
        username: req.body.username,
        color: req.body.color,
        breed: req.body.breed,
      };

      const result = await collection.insertOne(newEntry);

      res.json({ success: true, id: result.insertedId });
    } catch (e) {
      console.error(e);
      res.status(500).send('Error inserting data into MongoDB');
    } finally {
      await client.close();
      console.log('Connection closed to MongoDB');
    }
  }

  connectAndAdd();
});

// Fetch entry by ID
app.get('/api/:id', async (req, res) => {
  const client = new MongoClient(uri);
  const id = req.params.id;

  try {
    await client.connect();
    const collection = client.db('sample_mflix').collection('snuggle board');

    const entry = await collection.findOne({ _id: new ObjectId(id) });

    if (entry) {
      res.json(entry);
    } else {
      res.status(404).send('Entry not found.');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Error retrieving data from MongoDB');
  } finally {
    await client.close();
  }
});

// Update entry
app.post('/api/update/:id', async (req, res) => {
  const client = new MongoClient(uri);
  const id = req.params.id;
  const updatedData = {
    username: req.body.username,
    color: req.body.color,
    breed: req.body.breed,
  };

  try {
    await client.connect();
    const collection = client.db('sample_mflix').collection('snuggle board');

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );

    if (result.modifiedCount === 1) {
      res.json({ success: true });
    } else {
      res.status(404).send('Entry not found or no changes made.');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Error updating data in MongoDB');
  } finally {
    await client.close();
  }
});

// Delete entry
app.post('/api/delete/:id', async (req, res) => {
  const client = new MongoClient(uri);
  const id = req.params.id;

  try {
    await client.connect();
    const collection = client.db('sample_mflix').collection('snuggle board');

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      res.json({ success: true });
    } else {
      res.status(404).send('Entry not found.');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Error deleting data from MongoDB');
  } finally {
    await client.close();
  }
});

app.get('/api/:id', async (req, res) => {
  const client = new MongoClient(uri);
  const id = req.params.id;

  try {
    // Validate ID format
    if (!ObjectId.isValid(id)) {
      return res.status(400).send('Invalid ID format');
    }

    await client.connect();
    const collection = client.db('sample_mflix').collection('snuggle board');

    // Use validated ObjectId
    const entry = await collection.findOne({ _id: new ObjectId(id) });

    if (entry) {
      res.json(entry);
    } else {
      res.status(404).send('Entry not found');
    }
  } catch (error) {
    console.error('Error fetching entry:', error);
    res.status(500).send('Server error');
  } finally {
    await client.close();
  }
});

// Serve React frontend for any route not handled by the above
app.get('*', (req, res) => {
  res.sendFile(path.resolve(reactBuildPath, 'index.html'));
});

// Port config and starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('The web app is listening on port %d', PORT);
});
