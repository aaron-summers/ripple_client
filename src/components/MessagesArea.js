import React from 'react';
import NewMessageForm from './NewMessageForm';
import {Card} from 'react-bootstrap'

const MessagesArea = ({conversation: { id, title, messages}, current_user}) => {
    return (
        <div className="messagesArea">
            <h2 className="message-title">{title}</h2>
            <Card className="message-card">
            <div>{orderedMessages(messages, current_user)}</div>
            </Card>
            <NewMessageForm conversation_id={id} />
        </div>
    )
} 

export default MessagesArea;

const orderedMessages = (messages, current_user) => {
    const sortedMessages = messages.sort(
        (a,b) => new Date(a.created_at) - new Date(b.created_at)
    )
    return sortedMessages.map(message => {
        return current_user.username === message.username ? 
            <div className="user-message" key={message.id}>
                <Card text="white" className="messages-card"><Card.Title className="message-username">{message.username}</Card.Title>
                    <Card.Text ><div className="message-text"> {message.text}</div></Card.Text></Card>
            </div> :
            <div className="non-user-message" key={message.id}>
                <Card text="white" className="non-messages-card"><Card.Title className="non-message-username">{message.username}</Card.Title>
                <Card.Text ><div className="non-message-text">{message.text}</div></Card.Text></Card>
            </div>
    })
}