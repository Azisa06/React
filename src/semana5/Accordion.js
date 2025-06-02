import { useState } from 'react';
import Panel from './Panel';
import './Accordion.css';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="semana5-accordion-container">
      <h2 className="semana5-accordion-title">Almaty, Cazaquistão</h2>
      <Panel
        title="Sobre"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Com uma população de cerca de 2 milhões, Almaty é a maior cidade do Cazaquistão. De 1929 a 1997, foi sua capital.
      </Panel>
      <Panel
        title="Etimologia"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        O nome vem de <span lang="kk-KZ">алма</span>, a palavra cazaque para "maçã" e é frequentemente traduzido como "cheio de maçãs". De fato, a região ao redor de Almaty é considerada o lar ancestral da maçã, e a espécie selvagem <i lang="la">Malus sieversii</i> é considerada uma provável candidata para o ancestral da maçã doméstica moderna.
      </Panel>
    </div>
  );
}