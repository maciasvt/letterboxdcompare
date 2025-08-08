const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors'); // Importar cors

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.static('public')); // Carpeta para archivos estáticos

app.get('/extraer', async (req, res) => {
    const { url } = req.query; 
    try {
        const response = await axios.get(url);
        const html = response.data;
        res.send(html); // O puedes enviar respuesta coherente como arriba
    } catch (error) {
        res.status(500).send('Error al extraer la página: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
