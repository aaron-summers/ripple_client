import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { API_WS_ROOT } from './constants';
import { ActionCableProvider } from 'react-actioncable-provider'
import ActionCable from 'actioncable';

const cable = ActionCable.createConsumer('ws://localhost:3000/cable');
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    // <ActionCableProvider url={API_WS_ROOT}>
    <ActionCableProvider cable={cable}>
      <App />
    </ActionCableProvider>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();