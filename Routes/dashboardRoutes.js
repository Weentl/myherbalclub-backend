const express = require('express');
const router = express.Router();

// Ejemplo de datos para el dashboard
const sampleData = [
  { id: 1, name: 'Producto A' },
  { id: 2, name: 'Producto B' }
];

// Ruta para obtener datos del dashboard
router.get('/dashboard-data', (req, res) => {
  res.json(sampleData);
});

module.exports = router;
