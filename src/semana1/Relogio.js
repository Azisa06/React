import React from 'react';

export default function Relogio() {
  // Verifica se o intervalo já foi iniciado
  if (!window.relogioIniciado) {
    window.relogioIniciado = true;

    function formatarHora(data) {
      const opcoes = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return data.toLocaleTimeString('pt-BR', opcoes);
    }

    function atualizarHora() {
      const elemento = document.getElementById('hora');
      if (elemento) {
        elemento.innerText = formatarHora(new Date());
      }
      setTimeout(atualizarHora, 1000);
    }

    atualizarHora();
  }

  return (
    <div className="relogio-container">
      <h3>Hora Atual:</h3>
      <p id="hora">Carregando...</p>
    </div>
  );
}