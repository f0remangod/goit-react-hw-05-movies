import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <StyledLink to="">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="movies">Movies</StyledLink>
        </li>
      </ul>
    </header>
  );
};

const StyledLink = styled(NavLink)`
  color: green;
  &.active {
    color: #4901da;
  }
`;
