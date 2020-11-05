import React, { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState('');

  const displayMessage = (msg) => {
    setMessage(msg);
    setDisplay(!display);

    setTimeout(() => {
      setDisplay(false);
    }, 3000);
  };

  const close = () => {
    setDisplay(false);
  };

  return (
    <MessageContext.Provider
      value={{ display, message, close, displayMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
};
