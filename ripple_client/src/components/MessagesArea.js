import React from 'react';
import NewMessageForm from './NewMessageForm';

const MessagesArea = ({
    conversation: { id, title, messages },
}) => {
    return (
        <div className="messagesArea">
            <h2>{title}</h2>
            <div>{orderedMessages(messages)}</div>
            <NewMessageForm conversation_id={id} />
        </div>
    )
} 

export default MessagesArea;

const orderedMessages = messages => {
    const sortedMessages = messages.sort(
        (a,b) => new Date(a.created_at) - new Date(b.created_at)
    )
    return sortedMessages.map(message => {
        return <div key={message.id}>{message.username}: {message.text}</div>
    })
}