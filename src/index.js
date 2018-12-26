import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';

import chat from './reducers';

const store = createStore(chat);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
