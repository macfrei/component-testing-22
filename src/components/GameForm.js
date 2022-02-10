import Button from './Button';
import Input from './Input';
import styled from 'styled-components';
import { useState } from 'react';

const initialFormData = {
  nameOfGame: '',
  playerNames: '',
};

export default function GameForm({ onCreateGame }) {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <FormGrid
      aria-labelledby="formHeader"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 id="formHeader">Create a new game</h2>
      <Input
        name="nameOfGame"
        labelText="Name of game"
        placeholder="e.g. Carcassonne"
        onChange={handleChange}
        value={formData.nameOfGame}
      />
      <Input
        name="playerNames"
        labelText="Player names"
        placeholder="e.g. John Doe, Jane Doe"
        onChange={handleChange}
        value={formData.playerNames}
      />
      <Button>Create game</Button>
    </FormGrid>
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onCreateGame({
      nameOfGame: formData.nameOfGame,
      playerNames: formData.playerNames.split(',').map(name => name.trim()),
    });
    setFormData(initialFormData);
  }
}

const FormGrid = styled.form`
  display: grid;
  gap: 10px;
`;
