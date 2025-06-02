import React, { useState } from 'react';
import CatGallery from './CatGallery';
import Toolbar from './Toolbar';
import MovingDot from './MovingDot'; 
import './Atv04.css';
import { catBreedsList } from './Cats.js'; 

export default function App() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 }); 

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
  };

  const getFilteredCatBreeds = () => {
    if (activeFilter === 'Todos') {
      return catBreedsList;
    }
    return catBreedsList.filter(breed => breed.continent === activeFilter);
  };

  const filteredList = getFilteredCatBreeds();

  const handlePointerMove = (e) => {
    setDotPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div onPointerMove={handlePointerMove} style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <div className="semana4-content-wrapper">
        <Toolbar
          onFilterChange={handleFilterChange}
          activeFilter={activeFilter}
        />
        <CatGallery catBreedsList={filteredList} />
      </div>
      <MovingDot x={dotPosition.x} y={dotPosition.y} />
    </div>
  );
}