import { useState } from 'react';

import './CatGallery.css';

export default function CatGallery({ catBreedsList }) {
  const [index, setIndex] = useState(0); 
  const [showMore, setShowMore] = useState(false); 

  const currentListLength = catBreedsList.length;

  function handlePreviousClick() {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + currentListLength) % currentListLength;
      return newIndex;
    });
    setShowMore(false); 
  }

  function handleNextClick() { 
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % currentListLength;
      return newIndex;
    });
    setShowMore(false); 
  }

  function handleMoreClick() { 
    setShowMore(!showMore); 
  }

  if (currentListLength === 0) {
    return (
      <div className="semana4-cat-card-container">
        <div className="semana4-cat-card">
          <p>Nenhuma raça encontrada para o filtro selecionado.</p>
        </div>
      </div>
    );
  }

  if (index >= currentListLength) {
    setIndex(0);
  }

  let currentBreed = catBreedsList[index]; 

  return (
    <div className="semana4-cat-card-container">
      <div className="semana4-cat-card">
        <div className="semana4-breed-number">{`0${index + 1}`}</div>
        <h2 className="semana4-breed-name">{currentBreed.name}</h2>

        <img
          src={currentBreed.imageUrl}
          alt={currentBreed.alt}
          className="semana4-breed-image"
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', marginTop: '20px' }}
        />

        <div className="semana4-breed-details">
          <p>
            **Origem:** {currentBreed.origin}
          </p>
          {showMore && <p className="semana4-breed-description">{currentBreed.description}</p>}
        </div>

        <div className="semana4-card-actions">
          <button onClick={handlePreviousClick} className="semana4-btn semana4-btn-previous">
            Raça Anterior
          </button>
          
          <button onClick={handleMoreClick} className="semana4-btn semana4-btn-details">
            {showMore ? 'Esconder detalhes' : 'Mostrar detalhes'}
          </button>

          <button onClick={handleNextClick} className="semana4-btn semana4-btn-next">
            Próxima Raça
          </button>
        </div>
      </div>
    </div>
  );
}