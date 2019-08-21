import React from 'react';
import NewMessageForm from './NewMessageForm';

const MessagesArea = ({conversation: { id, title, messages}, current_user}) => {
    return (
        <div className="messagesArea">
            <h2>{title}</h2>
            <div>{orderedMessages(messages, current_user)}</div>
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
        current_user.username === message.username ? console.log("true") : console.log("false")
        return <div key={message.id}>{message.username}: {message.text}</div>
    })
}