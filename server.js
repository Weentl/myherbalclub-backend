const mongoose = require('mongoose');

// Reemplaza <password> y <dbname> con tus credenciales
const uri = 'mongodb+srv://wentl:Jangel05$@cluster0.eulny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

