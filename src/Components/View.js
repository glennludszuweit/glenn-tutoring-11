import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MessageContext } from '../Contexts/MessagesContext';
import { UsersContext } from '../Contexts/UsersContext';

function View() {
  const { currentUser, remove } = useContext(UsersContext);
  const { displayMessage } = useContext(MessageContext);

  const user = currentUser(useParams());

  const removeUser = () => {
    remove(user.id);
    displayMessage('Player Deleted!');
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <Link to={`/edit/${user.id}`}>
        <button>Edit</button>
      </Link>
      <Link to='/'>
        <button onClick={removeUser}>Delete</button>
      </Link>
    </div>
  );
}

export default View;
