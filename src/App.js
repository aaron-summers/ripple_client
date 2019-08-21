import React from 'react';
import './App.css';
import Main from './containers/Main';
// import API from './adapters/API';
// import Navbar from './components/Navbar';
// import ConversationsList from './components/ConversationsList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Main />
        {/* <Navbar user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut}/> */}
        
      </div>
    )
  }
}

export default App;
