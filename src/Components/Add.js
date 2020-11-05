import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageContext } from '../Contexts/MessagesContext';
import { UsersContext } from '../Contexts/UsersContext';

function Add() {
  const { add } = useContext(UsersContext);
  const { displayMessage } = useContext(MessageContext);

  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const addUser = () => {
    add(nameRef.current.value, ageRef.current.value);
    displayMessage('Player Added!');
  };

  return (
    <div>
      <input type='text' placeholder='name' ref={nameRef} />
      <input type='number' placeholder='age' ref={ageRef} />
      <Link to='/'>
        <button onClick={addUser}>Submit</button>
      </Link>
    </div>
  );
}

export default Add;
