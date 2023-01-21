import { StyledHeaderContainer } from './HeaderContainer.styled';
import PropTypes from 'prop-types';

export const HeaderContainer = ({ children }) => {
  return <StyledHeaderContainer>{children}</StyledHeaderContainer>;
};

HeaderContainer.propTypes = {
  children: PropTypes.node,
};
