import React from 'react';
import './App.css';
import Header from './Containers/Header';
import Aside from './Containers/Aside';
import Main from './Containers/Main';
import Footer from './Containers/Footer';
import { UsersProvider } from './Contexts/UsersContext';
import Message from './Components/Message';
import { MessageProvider } from './Contexts/MessagesContext';

function App() {
  return (
    <UsersProvider>
      <MessageProvider>
        <Message />
        <Header />
        <div className='main-container'>
          <Aside />
          <Main />
        </div>
        <Footer />
      </MessageProvider>
    </UsersProvider>
  );
}

export default App;
