import styled from 'styled-components';

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <Wrapper>
      {nameOfGame}
      {players.map((player, index) => (
        <Player key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </Player>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
`;
