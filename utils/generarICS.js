function formatearFecha(fecha) {
  const d = new Date(fecha);
  return d.toISOString().split('T')[0].replace(/-/g, '');
}

function generarICS(eventos) {
  let contenido = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Event Love//ES\n';

  eventos.forEach((evento, index) => {
    const inicio = formatearFecha(evento.fecha);
    const fin = formatearFecha(new Date(new Date(evento.fecha).getTime() + 86400000));

    contenido += `BEGIN:VEVENT
UID:${Date.now()}-${index}@eventlove.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART;VALUE=DATE:${inicio}
DTEND;VALUE=DATE:${fin}
SUMMARY:${evento.titulo}
DESCRIPTION:${evento.descripcion}
END:VEVENT
`;
  });

  contenido += 'END:VCALENDAR\n';
  return contenido;
}

module.exports = generarICS;
