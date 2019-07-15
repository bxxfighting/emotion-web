import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import { setRouterHistory, setStoreDispatch } from './actions';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
const history = createHashHistory();
store.dispatch(setRouterHistory(history));
store.dispatch(setStoreDispatch(store.dispatch));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
