const axios = require('axios');
const cheerio = require('cheerio');

async function extraerHtml(url) {
    try {
        // Realiza la solicitud HTTP a la página web
        const response = await axios.get(url);
        
        // Comprueba si la solicitud fue exitosa
        if (response.status === 200) {
            const html = response.data;

            // Cargar el HTML en cheerio
            const $ = cheerio.load(html);

            // Opcional: Devuelve el HTML formateado
            console.log($.html());
        } else {
            console.log(`Error: No se pudo acceder a la página, estado ${response.status}`);
        }
    } catch (error) {
        console.error(`Error de solicitud: ${error.message}`);
    }
}

// Cambia la URL a la que quieres acceder
const url = 'https://letterboxd.com/otromacias/films/';
extraerHtml(url);
