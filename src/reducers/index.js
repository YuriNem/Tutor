import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import data from '../../data/data.js';
import { combineReducers } from 'redux';

const subject = handleActions({
    [actions.changeSubject](state, { payload: { subjectName } }) {
      return subjectName;
    },
}, 'Математика - ОГЭ');

const method = handleActions({
    [actions.changeMethod](state, { payload: { methodName } }) {
      return methodName;
    },
}, 'Выезд');

const time = handleActions({
    [actions.changeTime](state, { payload: { timeName } }) {
      return timeName;
    },
}, '60 минут');

export default combineReducers({
    subject,
    method,
    time,
});
