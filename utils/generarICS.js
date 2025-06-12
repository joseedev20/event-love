function obtenerRangoHora(fecha, momento) {
  switch (momento) {
    case 'mañana':
      return {
        todoDia: false,
        inicio: crearFechaHora(fecha, 6, 0),
        fin: crearFechaHora(fecha, 12, 0)
      };
    case 'tarde':
      return {
        todoDia: false,
        inicio: crearFechaHora(fecha, 13, 0),
        fin: crearFechaHora(fecha, 18, 0)
      };
    case 'noche':
      return {
        todoDia: false,
        inicio: crearFechaHora(fecha, 19, 0),
        fin: crearFechaHora(fecha, 23, 0)
      };
    case 'todo':
    default:
      return {
        todoDia: true,
        inicio: new Date(`${fecha}T00:00:00-05:00`),
        fin: new Date(`${fecha}T00:00:00-05:00`) // se ajusta en `formatearFechaSolo`
      };
  }
}

function formatearFechaHora(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function formatearFechaSolo(date) {
  return date.toISOString().split('T')[0].replace(/-/g, '');
}

function crearFechaHora(fecha, hora, minuto) {
  const local = new Date(`${fecha}T${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}:00-05:00`);
  return new Date(local.toISOString());
}

function generarICS(eventos) {
  let contenido = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Event Love//ES\n';

  eventos.forEach((evento, index) => {
    const { todoDia, inicio, fin } = obtenerRangoHora(evento.fecha, evento.momento || 'todo');

    const dtStart = todoDia
      ? `DTSTART;VALUE=DATE:${formatearFechaSolo(inicio)}`
      : `DTSTART:${formatearFechaHora(inicio)}`;
    const dtEnd = todoDia
      ? `DTEND;VALUE=DATE:${formatearFechaSolo(fin)}`
      : `DTEND:${formatearFechaHora(fin)}`;

    contenido += `BEGIN:VEVENT\nUID:${Date.now()}-${index}@eventlove.com\nDTSTAMP:${formatearFechaHora(new Date())}\n${dtStart}\n${dtEnd}\nSUMMARY:${evento.titulo}\nDESCRIPTION:${evento.descripcion || ''}\nEND:VEVENT\n`;
  });

  contenido += 'END:VCALENDAR\n';
  return contenido;
}

module.exports = generarICS;
