import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const initialState = JSON.parse(localStorage.getItem('users'))
  ? JSON.parse(localStorage.getItem('users'))
  : [
      { id: '1', name: 'Samuel', age: 26 },
      { id: '2', name: 'Daniel', age: 26 },
      { id: '3', name: 'Madhu', age: 26 },
      { id: '4', name: 'Nisha', age: 26 },
    ];

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const currentUser = (userParams) => {
    const { id } = userParams;
    const index = users.findIndex((user) => user.id === id);
    return users[index];
  };

  const add = (name, age) => {
    setUsers([{ id: uuid(), name: name, age: age }, ...users]);
  };

  const edit = (userParams) => {
    const update = users.map((user) =>
      user.id === userParams.id ? userParams : user
    );
    setUsers([...update]);
  };

  const remove = (id) => {
    const remove = users.filter((user) => user.id !== id);
    setUsers([...remove]);
  };

  return (
    <UsersContext.Provider
      value={{ users, setUsers, currentUser, add, edit, remove }}
    >
      {children}
    </UsersContext.Provider>
  );
};
