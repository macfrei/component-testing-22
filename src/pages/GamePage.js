import Button from '../components/Button';
import Player from '../components/Player';

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  onEndGame,
  onMinus,
  onPlus,
}) {
  return (
    <>
      <header>
        <h2>{nameOfGame}</h2>
        <p>Successfully created a new game!</p>
      </header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <Button onClick={onResetScores}>Reset scores</Button>
      <Button onClick={onEndGame}>End game</Button>
    </>
  );
}
