import { Link } from 'react-router-dom';

import { EvilIcon } from './Icons';

/**
 * Works as App's Navbar.
 *
 * @returns {React.ReactElement}
 */
export const NavBar = () => {
  return (
    <div
      className='hn-navbar-container hn-default-padding'
      id='hn-app-nav-id'
    >
      <Link to='/'>
        <EvilIcon />
      </Link>
      <div className='hn-default-text'>Hackernoon demo app 20.11.2022</div>
    </div>
  );
};
