const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors'); // Importar CORS

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para el dominio específico de GitHub Pages
app.use(cors({ origin: 'https://maciasvt.github.io' })); // Asegúrate de que esta URL esté correcta

app.use(express.static('public')); // Carpeta para archivos estáticos

app.get('/extraer', async (req, res) => {
    const { url } = req.query; 
    try {
        const response = await axios.get(url);
        const html = response.data;
        res.send(html); // O devolver datos en un formato procesado
    } catch (error) {
        res.status(500).send('Error al extraer la página: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});