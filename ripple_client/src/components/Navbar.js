import React from 'react';
import UserForm from './UserForm';

const Navbar = ({ user, signUp, logIn, logOut}) => {
    return (
        <div>
            {
                user ? <div><button onClick={logOut}>Log Out</button></div> :
                    <>
                        <UserForm submit={signUp} header={'Sign up'} />
                        or
                        <UserForm submit={logIn} header={'Log in'} />
                    </>
            }
        </div>
    )
}

export default Navbar