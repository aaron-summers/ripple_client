import React from 'react';
import { API_ROOT, HEADERS } from '../constants/index';
import {Form, Button, InputGroup} from 'react-bootstrap';

class NewMessageForm extends React.Component {
    
    state = {
        text: '',
        conversation_id: this.props.conversation_id
    }

    componentWillReceiveProps = nextProps => {
        this.setState({conversation_id: nextProps.conversation_id})
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        fetch(`${API_ROOT}/messages`, {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "content-Type": "application/json",
                "Authorization": `${localStorage.getItem("token")}`
            },
            body: JSON.stringify(this.state)
        })
        this.setState({text: ''})
    }

    render = () => {
        return (
            <div className="newMessageForm">
                <Form inline onSubmit={this.handleSubmit}>
                    <InputGroup>
                    <Form.Control className="textfield-message"
                        type="text"
                        placeholder="New Message..."
                        value={this.state.text}
                        onChange={this.handleChange}
                    /><InputGroup.Append>
                    <Button className="form-button" type="submit" variant="outline-info">Send</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        )
    }
}

export default NewMessageForm