// Função para obter os componentes de hora e data no fuso de Brasília
function getBrasiliaTimeComponents() {
  const now = new Date();

  // Formatador de hora
  const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  // Formatador de data
  const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Extração das partes da hora
  const parts = timeFormatter.formatToParts(now);
  const hour = parts.find(p => p.type === 'hour').value;
  const minute = parts.find(p => p.type === 'minute').value;
  const second = parts.find(p => p.type === 'second').value;

  const formattedTime = `${hour}:${minute}:${second}`;
  const formattedDate = dateFormatter.format(now);

  return { formattedTime, formattedDate };
}

// Função para atualizar o relógio
function updateClock() {
  const { formattedTime, formattedDate } = getBrasiliaTimeComponents();

  document.getElementById('time').textContent = formattedTime;
  document.getElementById('date').textContent = formattedDate;
}

// Atualiza o relógio a cada 1000ms (1 segundo)
setInterval(updateClock, 1000);

// Inicializa o relógio ao carregar a página
updateClock();
