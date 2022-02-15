import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameForm from './GameForm';

describe('GameForm', () => {
  it('renders two inputs and a submit button', () => {
    render(<GameForm />);

    // Logs out rendered HTML
    // screen.debug();

    const nameOfGameInput = screen.getByLabelText('Name of game');
    const nameOfPlayersInput = screen.getByLabelText(
      'Player names, seperated by comma'
    );
    const submitButton = screen.getByRole('button', { name: /create game/i });

    expect(nameOfGameInput).toBeInTheDocument();
    expect(nameOfPlayersInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('calls callback function with form data', () => {
    // Mock function from jest
    const createGameCallback = jest.fn();
    render(<GameForm onCreateGame={createGameCallback} />);

    const nameOfGameInput = screen.getByLabelText('Name of game');
    const nameOfPlayersInput = screen.getByLabelText(
      'Player names, seperated by comma'
    );
    const submitButton = screen.getByRole('button', { name: /create game/i });

    userEvent.type(nameOfGameInput, 'Siedler');
    userEvent.type(nameOfPlayersInput, 'John, Jane');
    userEvent.click(submitButton);

    expect(createGameCallback).toHaveBeenCalled();
    expect(createGameCallback).toHaveBeenCalledWith({
      nameOfGame: 'Siedler',
      playerNames: ['John', 'Jane'],
    });
  });
});
