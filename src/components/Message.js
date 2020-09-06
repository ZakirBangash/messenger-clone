import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Message.css'
const Message = ({ message,username }) => {
  const isUser = username === message.username;
console.log(isUser)
  return (
      <div className={`message_Card   ${isUser && 'user_Message'}`}>
      <Card className={isUser? 'user_Card':'guest_Card'} >
        <CardContent>
          <Typography
            color="white"
            varient="h1"
          >
            {message.username}: {message.text}
          </Typography>
         
        </CardContent>
        
      </Card>
      </div>    
  );
};

export default Message;
