import './CharacterList.css'
const characters = [
  {
    id: 1,
    name: "Feyre Archeron",
    book: "A Court of Thorns and Roses",
    description: "Caçadora mortal que se torna uma das protagonistas mais poderosas do universo feérico."
  },
  {
    id: 2,
    name: "Rhysand",
    book: "A Court of Mist and Fury",
    description: "Grão-Senhor da Corte Noturna, carismático, protetor e estratégico. Um dos mais amados da série."
  },
  {
    id: 3,
    name: "Tamlin",
    book: "A Court of Thorns and Roses",
    description: "Grão-Senhor da Corte Primaveril. Inicialmente aliado de Feyre, depois um personagem controverso."
  },
  {
    id: 4,
    name: "Nesta Archeron",
    book: "A Court of Silver Flames",
    description: "Irmã mais velha de Feyre. Fria e orgulhosa, vive uma jornada intensa de superação."
  },
  {
    id: 5,
    name: "Cassian",
    book: "A Court of Mist and Fury",
    description: "Comandante das forças da Corte Noturna. Leal, valente e com humor afiado."
  },
  {
    id: 6,
    name: "Azriel",
    book: "A Court of Wings and Ruin",
    description: "Espião mestre da Corte Noturna. Misterioso, calado e extremamente letal."
  }
];

export default function CharacterList() {
  return (
    <section className="character-section">
      <h2>🧝‍♀️ Personagens de ACOTAR</h2>
      <div className="character-grid">
        {characters.map((char) => (
          <div key={char.id} className="character-card">
            <h3>{char.name}</h3>
            <p><strong>Livro:</strong> {char.book}</p>
            <p>{char.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
