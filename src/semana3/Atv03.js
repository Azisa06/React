import './Atv03.css';
import { user } from './User';
import Avatar from './Avatar';
import BookGallery from './BookGallery';
import ReadingList from './ReadingList';
import Card from './Card';
import CharacterList from './CharacterList';

export default function App() {
  return (
    <div className="semana3-page">
      <Card>
        <Avatar name={user.name} avatar={user.avatar} />
      </Card>
      <BookGallery />
      <CharacterList />
      <ReadingList />
    </div>
  );
}
