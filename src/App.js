import { useState } from 'react';
import styled from 'styled-components/macro';
import Button from './components/Button';
import GameForm from './components/GameForm';
import HistoryEntry from './components/HistoryEntry';
import Navigation from './components/Navigation';
import Player from './components/Player';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState('');
  const [currentPage, setCurrentPage] = useState('play');
  const [history, setHistory] = useState([]);

  return (
    <AppLayout>
      {/* conditional rendering */}
      {currentPage === 'play' && (
        <div>
          <GameForm onCreateGame={createGame} />
        </div>
      )}

      {currentPage === 'game' && (
        <div>
          <header>{nameOfGame}</header>
          {players.map(({ name, score }, index) => (
            <Player
              key={name}
              name={name}
              score={score}
              onPlus={() => handlePlus(index)}
              onMinus={() => handleMinus(index)}
            />
          ))}
          <Button onClick={resetScores}>Reset scores</Button>
          <Button onClick={endGame}>End game</Button>
        </div>
      )}

      {currentPage === 'history' && (
        <HistoryWrapper>
          {history.map(({ nameOfGame, players, id }) => (
            <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
          ))}
        </HistoryWrapper>
      )}

      {(currentPage === 'play' || currentPage === 'history') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
    </AppLayout>
  );

  function createGame({ nameOfGame, playerNames }) {
    // playerNames is ['Jane', 'John']
    setNameOfGame(nameOfGame);
    setPlayers(playerNames.map(name => ({ name, score: 0 })));
    setCurrentPage('game');
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: 'foo' }, ...history]);
    setPlayers([]);
    setNameOfGame('');
    setCurrentPage('play');
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })));
  }

  function handlePlus(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function handleMinus(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }
}

const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`;

const HistoryWrapper = styled.div`
  display: grid;
  gap: 28px;
`;
