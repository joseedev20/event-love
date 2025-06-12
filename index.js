const express = require('express');
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
const axios = require('axios');
const generarICS = require('./utils/generarICS');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const RUTA_EVENTOS = './eventos.json';
const RUTA_ICS = './calendario.ics';

// POST /agregar-evento
app.post('/agregar-evento', async (req, res) => {
  const nuevoEvento = req.body;
  console.log('nuevoEvento', nuevoEvento)
   if (nuevoEvento.titulo === 'test') {
    return res.json({ success: true, mensaje: 'Evento de prueba ignorado' });
  }


  let eventos = [];
  if (fs.existsSync(RUTA_EVENTOS)) {
    eventos = JSON.parse(fs.readFileSync(RUTA_EVENTOS));
  }

  eventos.push(nuevoEvento);
  fs.writeFileSync(RUTA_EVENTOS, JSON.stringify(eventos, null, 2));

  console.log(' generarICS eventos', eventos)
  const icsContent = generarICS(eventos);
  fs.writeFileSync(RUTA_ICS, icsContent);

  try {
    const contenidoICS = Buffer.from(icsContent).toString('base64');
    const contenidoEventos = Buffer.from(JSON.stringify(eventos, null, 2)).toString('base64');

    const [shaICS, shaEventos] = await Promise.all([
      obtenerShaActual('calendario.ics'),
      obtenerShaActual('eventos.json')
    ]);

    await axios.put(
      'https://api.github.com/repos/joseedev20/event-love/contents/calendario.ics',
      {
        message: '📅 Actualización automática desde Event Love',
        content: contenidoICS,
        sha: shaICS
      },
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          'User-Agent': 'event-love',
        },
      }
    );

    await axios.put(
      'https://api.github.com/repos/joseedev20/event-love/contents/eventos.json',
      {
        message: '📦 Guardado de eventos históricos',
        content: contenidoEventos,
        sha: shaEventos
      },
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          'User-Agent': 'event-love',
        },
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'No se pudo subir a GitHub' });
  }
});

// GET /eventos
app.get('/eventos', (req, res) => {
  if (fs.existsSync(RUTA_EVENTOS)) {
    const eventos = JSON.parse(fs.readFileSync(RUTA_EVENTOS));
    res.json(eventos);
  } else {
    res.json([]);
  }
});

// Función genérica para obtener el SHA de un archivo
async function obtenerShaActual(nombreArchivo) {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/joseedev20/event-love/contents/${nombreArchivo}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    return response.data.sha;
  } catch (err) {
    return null; // si no existe, lo crea desde cero
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 API corriendo en el puerto ${PORT}`));
