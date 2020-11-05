import React, { useContext, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MessageContext } from '../Contexts/MessagesContext';
import { UsersContext } from '../Contexts/UsersContext';

function Edit() {
  const { currentUser, edit } = useContext(UsersContext);
  const { displayMessage } = useContext(MessageContext);

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const user = currentUser(useParams());

  const editUser = () => {
    user.name = nameRef.current.value;
    user.age = ageRef.current.value;
    edit(user);
    displayMessage('Player Updated!');
  };

  return (
    <div>
      <input
        type='text'
        placeholder='name'
        ref={nameRef}
        defaultValue={user.name}
      />
      <input
        type='number'
        placeholder='age'
        ref={ageRef}
        defaultValue={user.age}
      />
      <Link to={`/${user.id}`}>
        <button onClick={editUser}>Submit</button>
      </Link>
    </div>
  );
}

export default Edit;
