import React from 'react';
import './App.css';
import API from './adapters/API';
import Navbar from './components/Navbar';
import ConversationsList from './components/ConversationsList';

class App extends React.Component {

  state = {
    user: undefined
  }

  componentDidMount() {
    API.validateUser()
      .then(user => {
        this.setState({ user })
      })
  }

  signUp = user => {
    API.signUp(user)
      // .then(user => this.setState({ user }))
      .then(user => console.log(user))
  }

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut}/>
        <ConversationsList />
      </div>
    )
  }
}

export default App;
