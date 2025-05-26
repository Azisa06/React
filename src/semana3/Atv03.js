import './Atv03.css';
import { user } from './User';
import Avatar from './Avatar';
import BookGallery from './BookGallery';
import ReadingList from './ReadingList';
import Card from './Card';

export default function App() {
  return (
    <div className="app">
      <Card>
        <Avatar name={user.name} avatar={user.avatar} />
      </Card>
      <BookGallery />
      <ReadingList />
    </div>
  );
}
