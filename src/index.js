import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleWare from 'redux-thunk';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import rootReducer from './reducers';

const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
