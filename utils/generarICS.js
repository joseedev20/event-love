function obtenerRangoHora(fecha, momento) {
  const base = new Date(fecha);

  switch (momento) {
    case 'mañana':
      return {
        inicio: new Date(base.setHours(6, 0, 0)),
        fin: new Date(base.setHours(12, 0, 0))
      };
    case 'tarde':
      return {
        inicio: new Date(base.setHours(13, 0, 0)),
        fin: new Date(base.setHours(18, 0, 0))
      };
    case 'noche':
      return {
        inicio: new Date(base.setHours(19, 0, 0)),
        fin: new Date(base.setHours(23, 0, 0))
      };
    case 'todo':
    default:
      return {
        inicio: new Date(fecha),
        fin: new Date(new Date(fecha).getTime() + 86400000) // +1 día
      };
  }
}

function formatearFechaHora(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function generarICS(eventos) {
  let contenido = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Event Love//ES\n';

  eventos.forEach((evento, index) => {
    const { inicio, fin } = obtenerRangoHora(evento.fecha, evento.momento || 'todo');

    contenido += `BEGIN:VEVENT
UID:${Date.now()}-${index}@eventlove.com
DTSTAMP:${formatearFechaHora(new Date())}
DTSTART:${formatearFechaHora(inicio)}
DTEND:${formatearFechaHora(fin)}
SUMMARY:${evento.titulo}
DESCRIPTION:${evento.descripcion || ''}
END:VEVENT
`;
  });

  contenido += 'END:VCALENDAR\n';
  return contenido;
}

module.exports = generarICS;
