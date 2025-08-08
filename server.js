const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Permitir todas las cabeceras y métodos
app.use(cors({
    origin: 'https://maciasvt.github.io', // Permitir solicitudes de este origen
    //origin:'http://127.0.0.1:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Si tu API necesita cookies, etc.
}));

app.use(express.static('public')); // Carpeta para archivos estáticos

app.get('/extraer', async (req, res) => {
    const { url } = req.query;
    try {
        const response = await axios.get(url);
        const html = response.data;

        res.setHeader('Access-Control-Allow-Origin', 'https://maciasvt.github.io'); // Agregar manualmente
        //res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:3001');
        res.send(html);
    } catch (error) {
        res.status(500).send('Error al extraer la página: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

