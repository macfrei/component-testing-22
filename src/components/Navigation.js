import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Play</LinkStyled>
      <LinkStyled to="/history">History</LinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;

const LinkStyled = styled(NavLink)`
  background-color: lightgray;
  border: 1px solid black;
  width: 100%;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  color: black;

  &.active {
    background-color: #333;
    color: white;
  }
`;
