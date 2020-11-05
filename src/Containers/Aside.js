import React from 'react';
import Search from '../Components/Search';
import List from '../Components/List';

function Aside() {
  return (
    <div className='aside'>
      <Search />
      <List />
    </div>
  );
}

export default Aside;
