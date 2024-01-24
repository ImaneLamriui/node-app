// Importa el módulo Express
const express = require('express');

// Crea una aplicación de Express
const app = express();

// Define una ruta
app.get('/', (req, res) => {
  res.send('¡Hi, from Cybersecurity!');
});

// Escucha en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
