import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HistoryEntry from './HistoryEntry';

describe('HistoryEntry', () => {
  it('renders name of game and "show score" button only', () => {
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
    const button = screen.getByRole('button', { name: /show score/i });

    expect(nameOfGame).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders player names and scores after button click', () => {
    render(
      <HistoryEntry
        nameOfGame="Dodelido"
        players={[
          { name: 'John', score: 2, id: 'xyz' },
          { name: 'Jane', score: 1, id: 'abc' },
        ]}
      />
    );

    const button = screen.getByRole('button', { name: /show score/i });

    userEvent.click(button);

    const player1 = screen.getByText(/john/i);
    const player2 = screen.getByText(/jane/i);
    const playerScore1 = screen.getByText(/2/i);
    const playerScore2 = screen.getByText(/1/i);

    expect(player1).toBeInTheDocument();
    expect(player2).toBeInTheDocument();
    expect(playerScore1).toBeInTheDocument();
    expect(playerScore2).toBeInTheDocument();
  });
});