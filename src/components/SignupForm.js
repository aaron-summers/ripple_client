import React, {useState } from 'react';
import { Form, InputGroups, Button } from 'react-bootstrap'

const SignupForm = ({ submit, header }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    return (
        <Form className="split signup-form" onSubmit={e => {
            e.preventDefault();
            submit({ email, username, password})
            setEmail('')
            setUsername('')
            setPassword('')
        }}>
            <span>{header}</span>
            <Form.Group className="email-group">
            <Form.Control placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="username-group">
            <Form.Control placeholder="Username" type="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="password-group">
            <Form.Control placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit">Sign Up </Button>
        </Form>
    )
}

export default SignupForm