import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import Message from "./components/Message";

function App() {
  const [value, setvalue] = useState("");
  const [message, setmessage] = useState([
    { username: "Qazi", text: "Hi clever programmers" },
    { username: "sanny", text: "Hi i am from UET" },
    { username: "Warda", text: "Hi I love Zakir" },
  ]);
  const [username, setusername] = useState("");

  useEffect(() => {
    // it will render once when app.js page loads it will ask about name
    // later that name will use with your chatting.
    setusername(prompt("Enter your good name?"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setmessage([...message, { username: username, text: value }]);
    setvalue("");
  };

  return (
    <div className="App">
      <Header username={username} />

      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter message...</InputLabel>
          <Input
            type="text"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
          <Button disabled={!value} type="submit" onClick={sendMessage}>
            Send
          </Button>
        </FormControl>
      </form>

      {message.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
