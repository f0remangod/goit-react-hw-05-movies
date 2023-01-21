import { HeaderContainer } from 'components/HeaderContainer/HeaderContainer';
import { MenuContainer, MenuItem, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <MenuContainer>
          <MenuItem>
            <StyledLink to="">Home</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="movies">Movies</StyledLink>
          </MenuItem>
        </MenuContainer>
      </HeaderContainer>
    </header>
  );
};
