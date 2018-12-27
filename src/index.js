import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import rootReducer from './reducers';
import setupSockets from './sockets';
import handleNewMessage from './sagas';
import username from './utils/name';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

const socket = setupSockets(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
