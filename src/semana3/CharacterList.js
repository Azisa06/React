import './CharacterList.css'
const characters = [
  {
    id: 1,
    name: "Feyre Archeron",
    photo: "https://preview.redd.it/imagine-nesta-and-feyre-archeron-v0-quvyj5747wea1.png?width=1024&format=png&auto=webp&s=ccb0fa7010adac3a210aac432ceaf6ad41a1f645",
    description: "Caçadora mortal que se torna uma das protagonistas mais poderosas do universo feérico."
  },
  {
    id: 2,
    name: "Rhysand",
    photo: "https://i.pinimg.com/736x/d8/31/8c/d8318c908ccdee1c0deff6851d4b680e.jpg",
    description: "Grão-Senhor da Corte Noturna, carismático, protetor e estratégico. Um dos mais amados da série."
  },
  {
    id: 3,
    name: "Tamlin",
    photo: "https://i.pinimg.com/736x/cf/6f/ea/cf6feabc0d5399c488345eff2859aa9f.jpg",
    description: "Grão-Senhor da Corte Primaveril. Inicialmente aliado de Feyre, depois um personagem controverso."
  },
  {
    id: 4,
    name: "Nesta Archeron",
    photo: "https://assets.mycast.io/posters/actress-who-could-play-nesta-archeron-acotar-fan-casting-poster-491615-large.jpg?1721656155",
    description: "Irmã mais velha de Feyre. Fria e orgulhosa, vive uma jornada intensa de superação."
  },
  {
    id: 5,
    name: "Cassian",
    photo: "https://fictionfanart.com/wp-content/uploads/2024/03/cassian-fan-art-02-1011x1024.jpg",
    description: "Comandante das forças da Corte Noturna. Leal, valente e com humor afiado."
  },
  {
    id: 6,
    name: "Azriel",
    photo: "https://kleankindle.net/cdn/shop/files/25.png?v=1716295564",
    description: "Espião mestre da Corte Noturna. Misterioso, calado e extremamente letal."
  }
];

export default function CharacterList() {
  return (
    <section className="character-section">
      <h2>Personagens principais</h2>
      <div className="character-grid">
        {characters.map((char) => (
          <div key={char.id} className="character-card">
            <img
              src={char.photo}
              alt={`Foto de ${char.name}`}
              className="character-image"
            />
            <h3>{char.name}</h3>
            <p>{char.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
