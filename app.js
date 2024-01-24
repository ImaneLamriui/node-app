// Import the Express module:
const express = require('express');

// Create an Express application:
const app = express();

// Define a route:
app.get('/', (req, res) => {
  res.send('¡Hi, from Cybersecurity!');
});

// Listen on port 3000:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
