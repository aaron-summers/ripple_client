import React from 'react';
import { API_ROOT, HEADERS } from '../constants/index';

class NewConversationForm extends React.Component {

    state = {
        title: ''
    }

    handleChange = e => {
        this.setState({ title: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(`${API_ROOT}/conversations`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(this.state)
        })
        this.setState({ title: '' })
        window.location.reload()
    }

    render = () => {
        return (
            <div className="newConversationForm">
                <form onSubmit={this.handleSubmit}>
                    <label>New Conversation:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default NewConversationForm