import React, { useState, useEffect } from 'react';
import { Button,  FormControl , InputLabel, Input , IconButton} from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';
import './App.css';
import Message from './Message';
import db from './frebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import Footer from './Footer';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data()})))
    })
  }, [] )

  useEffect(() => {
    setUsername(prompt('Do Enter your NickName😁'))
  }, []) 
  
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput('');
  }

  return (
    <div className="App">
      <img src="https://yellowmessenger.files.wordpress.com/2014/12/32a95eaa-32fe-4de4-b54d-2226769a5fc9.jpg" alt="Yellow Messenger Clone LOGO"></img>
      <h1>Yellow Messenger🚀!!</h1>
  <h2>Welcome {username}</h2>

      <form>
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__IconButton" type ='submit' disabled={!input} variant="contained" color="primary"  onClick={sendMessage} >
              <SendIcon/>
          </IconButton>
        
        </FormControl>

      </form>

    <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username}   message={message} />
        ))
      }
     </FlipMove>
     
     
    </div>

  );
}

export default App;
