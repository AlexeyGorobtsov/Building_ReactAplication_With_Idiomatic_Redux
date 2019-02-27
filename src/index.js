import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './redusers';
import App from './components/App';
import { loadState, saveState } from "./localStorage";
import throttle from 'lodash/throttle';

const persistedState = {
  todos: [{
      id: '0',
      text: 'Welcome Back!',
      completed: false
  }]
};

const store = createStore(todoApp, persistedState);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    })
}, 1000));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);