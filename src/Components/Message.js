import React, { useContext } from 'react';
import { MessageContext } from '../Contexts/MessagesContext';

function Message() {
  const { display, message, close } = useContext(MessageContext);

  return display ? (
    <div>
      <h1>
        {message} <span onClick={close}>X</span>
      </h1>
    </div>
  ) : null;
}

export default Message;
