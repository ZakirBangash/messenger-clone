import React,{ forwardRef }  from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Message.css'

// we use forwardRef for fliping the chat messages

const Message =  forwardRef (({ message,username },ref) => {

  const isUser = username === message.username;
console.log(isUser)
  return (
      <div  ref={ref} className={`message_Card   ${isUser && 'user_Message'}`}>
      <Card className={isUser? 'user_Card':'guest_Card'} >
        <CardContent>
          <Typography
            color="white"
            varient="h1"
          >
            {!isUser && `${message.username}:`} {message.text}
          </Typography>
         
        </CardContent>
        
      </Card>
      </div>    
  );
});

export default Message;
