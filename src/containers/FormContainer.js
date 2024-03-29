import React from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm'
import ConversationsList from '../components/ConversationsList';
import { Navbar, Button } from 'react-bootstrap';

const FormContainer = ({ user, signUp, logIn, logOut}) => {
    return (
        <div>
            {
                user ? <div>
                <Navbar bg="dark" variant="dark">
                    <div>
                        <Navbar.Brand>Ripplee</Navbar.Brand>
                        <Button variant="outline-info" onClick={logOut}>Log Out</Button>
                    </div>
                </Navbar>
                    <div> 
                        <ConversationsList user={user}/> </div>
                    </div> :
                    <div>
                    <Navbar bg="dark" variant="dark">
                        <div>
                        <Navbar.Brand>Ripple</Navbar.Brand>
                        </div>
                    </Navbar>
                        <div className="split left">
                        <SignupForm submit={signUp} header={'Sign up'} />
                        </div>
                        <div className="split right">
                        <LoginForm submit={logIn} header={'Log in'} />
                        </div>
                    </div>
            }
        </div>
    )
}

export default FormContainer