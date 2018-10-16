import 'font-awesome/css/font-awesome.css';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AppContainer from './containers/App.js';

const initState = {
    subject: 'Математика - ОГЭ',
    method: 'Выезд',
    time: '60 минут',
    price: '700 рублей',
}

const store = createStore(
  reducers,
  initState,
  composeWithDevTools(applyMiddleware(thunk)),
);

const body = document.querySelector('body');
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, 
body);
