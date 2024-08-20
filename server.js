require('dotenv').config();
const mongoose = require('mongoose');

// Acceder a la variable de entorno MONGO_URI
const dbUri = process.env.MONGO_URI;

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('Error connecting to MongoDB:', err));


