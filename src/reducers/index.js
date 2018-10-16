import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { combineReducers } from 'redux';

const subject = handleActions({
    [actions.changeSubject](state, { payload: { subject } }) {
      return subject;
    },
}, 'Математика - ОГЭ');

const method = handleActions({
    [actions.changeMethod](state, { payload: { method } }) {
      return method;
    },
}, 'Выезд');

const time = handleActions({
    [actions.changeTime](state, { payload: { time } }) {
      return time;
    },
}, '60 минут');

const price = handleActions({
    [actions.changePrice](state, { payload: { price } }) {
      return price;
    },
}, '700 рублей');

export default combineReducers({
    subject,
    method,
    time,
    price,
});
