// Função para obter o horário de Brasília (UTC-3)
function getBrasiliaTime() {
    const brasiliaTime = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      hour12: false
    });
    
    return new Date(brasiliaTime);
  }
  
  // Função para formatar data de maneira amigável
  function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  }
  
  // Função para atualizar o relógio
  function updateClock() {
    const currentTime = getBrasiliaTime();
  
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    const dateString = formatDate(currentTime);
  
    // Atualiza a hora e a data no HTML
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
  }
  
  // Atualiza o relógio a cada 1000ms (1 segundo)
  setInterval(updateClock, 1000);
  
  // Inicializa o relógio ao carregar a página
  updateClock();
  