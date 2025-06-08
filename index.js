const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');
const axios = require('axios');
const generarICS = require('./utils/generarICS');

dotenv.config();
const app = express();
app.use(express.json());

const RUTA_EVENTOS = './eventos.json';
const RUTA_ICS = './calendario.ics';

// POST /agregar-evento
app.post('/agregar-evento', async (req, res) => {
  const nuevoEvento = req.body;

  let eventos = [];
  if (fs.existsSync(RUTA_EVENTOS)) {
    eventos = JSON.parse(fs.readFileSync(RUTA_EVENTOS));
  }

  eventos.push(nuevoEvento);
  fs.writeFileSync(RUTA_EVENTOS, JSON.stringify(eventos, null, 2));

  const icsContent = generarICS(eventos);
  fs.writeFileSync(RUTA_ICS, icsContent);

  try {
    const contenidoBase64 = Buffer.from(icsContent).toString('base64');

    const response = await axios.put(
      'https://api.github.com/repos/joseedev20/event-love/contents/calendario.ics',
      {
        message: '📅 Actualización automática desde Event Love',
        content: contenidoBase64,
        sha: await obtenerShaActual(), // se obtiene abajo
      },
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          'User-Agent': 'event-love',
        },
      }
    );

    res.json({ success: true, url: response.data.content.download_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'No se pudo subir a GitHub' });
  }
});

// Función para obtener el SHA del archivo actual en GitHub
async function obtenerShaActual() {
  const response = await axios.get(
    'https://api.github.com/repos/joseedev20/event-love/contents/calendario.ics',
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  return response.data.sha;
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 API corriendo en el puerto ${PORT}`));
