import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import Message from "./components/Message";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import messenger from './messenger.png'
import {db} from './firebase'
import firebase from 'firebase';

function App() {
  const [value, setvalue] = useState("");
  const [message, setmessage] = useState([  ]);
  const [username, setusername] = useState("");

  useEffect(() => {
    // it will render once when app.js page loads it will ask about name
    // later that name will use with your chatting.
    setusername(prompt("Enter your good name?"));
  }, []);

  useEffect(() => {
    console.log("hi baby")
   db.collection('users').orderBy('timestamp').onSnapshot(snapshot =>{
     setmessage(snapshot.docs.map(doc => doc.data()))

   })
  }, []);



  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('users').add({
      text:value,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    // setmessage([...message, { username: username, text: value }]);
    setvalue("");
  };

  return (
    <div className="App">
      <img className="img-fluid" src={messenger} alt="messenger"  />
      <Header username={username} />
    
      <form className="form">

        <FormControl className="form_Control">
          <Input className="input"
            type="text"
            placeholder='Enter message here'
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
          <IconButton className="icon_Button" disabled={!value} varient='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

  {/* flipMove is for flip the chat messages  */}
      <FlipMove>
      {message.map((message,id) => (
        <Message key={id} username={username} message={message} />
      ))}
      </FlipMove>

    </div>
  );
}

export default App;
