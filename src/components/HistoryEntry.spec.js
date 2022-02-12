import { render, screen } from '@testing-library/react';
import HistoryEntry from './HistoryEntry';

describe('HistoryEntry', () => {
  it('renders finished game data', () => {
    render(
      <HistoryEntry
        nameOfGame="Dodelido"
        players={[
          { name: 'John', score: 2, id: 'xyz' },
          { name: 'Jane', score: 1, id: 'abc' },
        ]}
      />
    );

    const nameOfGame = screen.getByText(/dodelido/i);
    const player1 = screen.getByText(/john/i);
    const player2 = screen.getByText(/jane/i);
    const playerScore1 = screen.getByText(/2/i);
    const playerScore2 = screen.getByText(/1/i);

    // Creates interactive testing playground
    // screen.logTestingPlaygroundURL();

    expect(nameOfGame).toBeInTheDocument();
    expect(player1).toBeInTheDocument();
    expect(player2).toBeInTheDocument();
    expect(playerScore1).toBeInTheDocument();
    expect(playerScore2).toBeInTheDocument();
  });
});
