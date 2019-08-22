import React, {useState } from 'react';
import { Form, InputGroups, Button } from 'react-bootstrap'

const LoginForm = ({ submit, header }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form className="split login-form" onSubmit={e => {
            e.preventDefault();
            submit({ email, password })
            setEmail('')
            setPassword('')
        }}>
            <span>{header}</span>
            <Form.Group className="email-group">
            <Form.Control placeholder="Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="password-group">
            <Form.Control placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Button type="submit">Login</Button>
        </Form>
    )
}

export default LoginForm