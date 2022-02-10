import { useState } from 'react';
import styled from 'styled-components/macro';
import GameForm from './components/GameForm';
import HistoryEntry from './components/HistoryEntry';
import Navigation from './components/Navigation';
import GamePage from './pages/GamePage';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState('');
  const [currentPage, setCurrentPage] = useState('play');
  const [history, setHistory] = useState([]);

  return (
    <AppLayout>
      <h1>Scorekeeper</h1>
      {currentPage === 'play' && <GameForm onCreateGame={createGame} />}

      {currentPage === 'game' && (
        <GamePage
          nameOfGame={nameOfGame}
          players={players}
          onResetScores={resetScores}
          onEndGame={endGame}
          onMinus={handleMinus}
          onPlus={handlePlus}
        />
      )}

      {currentPage === 'history' && (
        <HistoryWrapper>
          <h2>Previous Games</h2>
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
