// Punto de entrada del backend
// Importar Express
const express = require('express');
const app = express();

// Usar el puerto proporcionado por Render (o 3000 por defecto)
const port = process.env.PORT || 3000;

// Punto de entrada (ya lo tenías)
console.log('Servidor ERP iniciado');

// Definir una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Servidor ERP está funcionando!');
});

// Hacer que el servidor escuche en el puerto
app.listen(port, () => {
  console.log(`Servidor ERP escuchando en el puerto ${port}`);
});

