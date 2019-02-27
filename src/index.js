import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './redusers';
import App from './components/App';

const persistedState = {
  todos: [{
      id: 0,
      text: 'Welcome Back!',
      completed: false
  }]
};

const store = createStore(todoApp, persistedState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);