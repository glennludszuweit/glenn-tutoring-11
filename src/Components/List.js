import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from '../Contexts/UsersContext';

function List() {
  const { users } = useContext(UsersContext);

  return (
    <ul>
      {users.map((user) => {
        return (
          <Link to={`/${user.id}`}>
            <li key={user.id}>{user.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default List;
