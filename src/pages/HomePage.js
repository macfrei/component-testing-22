import GameForm from '../components/GameForm';
import Navigation from '../components/Navigation';

export default function HomePage({ onCreateGame }) {
  return (
    <>
      <GameForm onCreateGame={onCreateGame} />
      <Navigation />
    </>
  );
}
