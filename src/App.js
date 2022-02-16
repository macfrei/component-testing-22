import { useState } from 'react';
import styled from 'styled-components';
import GamePage from './pages/GamePage';
import HistoryPage from './pages/HistoryPage';
import { nanoid } from 'nanoid';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState('');
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  return (
    <AppLayout>
      <h1>Scorekeeper</h1>
      <Routes>
        <Route path="/" element={<HomePage onCreateGame={createGame} />} />
        <Route
          path="/game"
          element={
            <GamePage
              nameOfGame={nameOfGame}
              players={players}
              onResetScores={resetScores}
              onEndGame={endGame}
              onDecreasePlayerScore={decreasePlayerScore}
              onIncreasePlayerScore={increasePlayerScore}
            />
          }
        />
        <Route path="/history" element={<HistoryPage history={history} />} />
      </Routes>
    </AppLayout>
  );

  function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame);
    setPlayers(playerNames.map(name => ({ name, score: 0, id: nanoid() })));
    navigate('/game');
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: nanoid() }, ...history]);
    setPlayers([]);
    setNameOfGame('');
    navigate('/');
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })));
  }

  function increasePlayerScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreasePlayerScore(index) {
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
