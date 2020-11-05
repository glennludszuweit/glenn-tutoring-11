import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add</Link>
    </div>
  );
}

export default Header;
