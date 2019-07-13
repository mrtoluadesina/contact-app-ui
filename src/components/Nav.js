import React from 'react';
import { Link } from '@reach/router';
import Styled from 'styled-components';

const navs = ['contacts', 'blocked']

const Navigation = Styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: .4rem;
`;

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "active" : null
      };
    }}
  />
);

export default function Nav() {
  return (
    <Navigation className="nav">
      {navs.map(nav => (
        <NavLink key={nav} to={`/${nav === 'contacts' ? '' : nav}`}>
          {nav}
        </NavLink>
      ))}
    </Navigation>
  )
}