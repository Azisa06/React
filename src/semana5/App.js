import React from 'react';
import FormQuiz from './FormQuiz';
import FormTicket from './FormTicket';
import Accordion from './Accordion';
import Messenger from './Messenger';
import './App.css'; // Estilo geral para o container App

export default function App() {
  return (
    <div className="semana5-app-container">
      <h1>Atividades React - Gerenciamento de Estado</h1>

      {/* Exemplo 1: FormQuiz - Reagindo à entrada com estado */}
      <section className="semana5-section">
        <h2>1. Quiz da Cidade</h2>
        <FormQuiz />
      </section>

      {/* Exemplo 2: FormTicket - Escolhendo a Estrutura do Estado */}
      <section className="semana5-section">
        <h2>2. Formulário de Check-in</h2>
        <FormTicket />
      </section>

      {/* Exemplo 3: Accordion - Compartilhando Estado entre Componentes (Lifting State Up) */}
      <section className="semana5-section">
        <h2>3. Acordeão de Informações</h2>
        <Accordion />
      </section>

      {/* Exemplo 4: Messenger - Preservando e Redefinindo o Estado */}
      <section className="semana5-section">
        <h2>4. Aplicativo de Mensagens</h2>
        <Messenger />
      </section>
    </div>
  );
}