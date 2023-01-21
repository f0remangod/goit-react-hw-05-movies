import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  color: #001a00;
  &.active {
    color: #a01d1d;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  padding: 10px;
`;
