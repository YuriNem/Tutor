import 'font-awesome/css/font-awesome.css';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

import AppContainer from './containers/App.js';

import data from '../data/data.js';

const initState = {
    subject: 'Математика - ОГЭ',
    method: 'Выезд',
    time: '60 минут',
    data: data,
}

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const body = document.querySelector('body');
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
, body);
