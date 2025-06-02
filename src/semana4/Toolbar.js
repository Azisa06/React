import React from 'react';
import './Toolbar.css'; 
import './Atv04.css'; 


function FilterButton({ onClick, children, isActive }) {
  const buttonClass = `semana4-toolbar-filter-option ${isActive ? 'semana4-toolbar-filter-option-active' : ''}`;
  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}

export default function Toolbar({ onFilterChange, activeFilter }) {
  return (
    <div className="semana4-toolbar">

      <div className="semana4-toolbar-title">
        Filtrar por Continente
      </div>

      <FilterButton onClick={() => onFilterChange('Todos')} isActive={activeFilter === 'Todos'}>
        Todos
      </FilterButton>
      <FilterButton onClick={() => onFilterChange('Ásia')} isActive={activeFilter === 'Ásia'}>
        Ásia
      </FilterButton>
      <FilterButton onClick={() => onFilterChange('América')} isActive={activeFilter === 'América'}>
        América
      </FilterButton>
      <FilterButton onClick={() => onFilterChange('Europa')} isActive={activeFilter === 'Europa'}>
        Europa
      </FilterButton>
      <FilterButton onClick={() => onFilterChange('África')} isActive={activeFilter === 'África'}>
        África
      </FilterButton>
    </div>
  );
}