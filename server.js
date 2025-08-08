const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const PORT = process.env.PORT || 3000; // Cambiamos la forma de utilizar el puerto

app.use(express.static('public')); // Carpeta para archivos estáticos

app.get('/extraer', async (req, res) => {
    const { url } = req.query; // Obtén la URL de la consulta
    try {
        const response = await axios.get(url);
        const html = response.data;
        res.send(html);
    } catch (error) {
        res.status(500).send('Error al extraer la página: ' + error.message);
    }
});

app.listen(PORT, () => { // Cambiado a usar PORT
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
