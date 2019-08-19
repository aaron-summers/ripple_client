import React from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm'

const FormContainer = ({ user, signUp, logIn, logOut}) => {
    return (
        <div>
            {
                user ? <div><button onClick={logOut}>Log Out</button></div> :
                    <>
                        <SignupForm submit={signUp} header={'Sign up'} />
                        or
                        <LoginForm submit={logIn} header={'Log in'} />
                    </>
            }
        </div>
    )
}

export default FormContainer