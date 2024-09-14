import React from 'react';
import { useAppSelector } from '../../hooks/redux';


const Messages = () => {

  const { messages } = useAppSelector(state => state.app);

  return (
    <div>
      <h1>Messages</h1>

      {messages.map((message, index) => <p key={index}>{message}</p> )}
    </div>
  )
}

export default Messages;
