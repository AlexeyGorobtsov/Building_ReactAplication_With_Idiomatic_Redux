import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Router , Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App';

const history = createBrowserHistory();

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history} >
            <Route path='/:filter?' component={App}/>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root