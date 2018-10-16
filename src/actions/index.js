import "babel-core/register";
import "babel-polyfill";

import { createAction } from 'redux-actions';

import data from '../../data/data.js';

export const changeSubject = createAction('CHANGE_SUBJECT');
export const changeMethod = createAction('CHANGE_METHOD');
export const changeTime = createAction('CHANGE_TIME');
export const changePrice = createAction('CHANGE_PRICE');

const change = {
    subject: changeSubject,
    method: changeMethod,
    time: changeTime,
    price: changePrice,
};

export const asyncChange = (key, value) => async (dispatch, getState) => {
    dispatch(change[key]({ [key]: value }));
    const { subject, method, time } = getState();
    const [{ price }] = data.filter(data => data.subject === subject && data.method === method && data.time === time);
    dispatch(change.price({ price }));
}
