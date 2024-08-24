const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const User = require('./models/User'); // Asegúrate de tener un modelo User

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'Jangel05$'; // Usa una clave secreta robusta en producción

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://wentl:Jangel05$@cluster0.eulny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Ruta de login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Encuentra al usuario en la base de datos
    const user = await User.findOne({ email });
    
    // Verifica si el usuario existe y la contraseña es correcta
    if (!user || password !== user.password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Genera un token JWT
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



