const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Habilitar CORS para todas las peticiones
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://wentl:Jangel05$@cluster0.eulny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('Error connecting to MongoDB:', err));

app.get('/api/login', (req, res) => {
  res.json({ message: 'Login endpoint funciona correctamente' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Aquí agregarías la lógica para verificar las credenciales en la base de datos.
  if (email === 'usuario@ejemplo.com' && password === '123456') {
    res.status(200).json({ message: 'Login exitoso', token: 'abcdef123456' });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});




