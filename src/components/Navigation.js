import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Nav>
      <Link to="/play">Play</Link>
      <Link to="/history">History</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;
