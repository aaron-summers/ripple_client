import React from 'react';
import { API_ROOT, HEADERS } from '../constants/index';
import {Form, Button, InputGroup} from 'react-bootstrap';

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
    }

    render = () => {
        return (
            <>
            <br/>
            <div className="newConversationForm">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Create New Group:</Form.Label>
                    <InputGroup>
                    <Form.Control className="textfield"
                        type="text"
                        placeholder="New Group Name..."
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                    <Button className="form-button" type="submit" variant="outline-info">Create</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
            </>
        )
    }
}

export default NewConversationForm