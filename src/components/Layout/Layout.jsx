import { Header } from './Header/Header';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
