import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import { authFail, authStart, authSuccess, checkoutAuthTimeout, logout } from '../actions/auth';
import axios from 'axios/index';

const BASE_API_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY = '?key=AIzaSyA_bLWqGlT1OmxFyQyOEnmImoj-JC2LeEk';

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSucceed())
}

export function* checkoutAuthTimeoutSaga(action) {
    yield delay(action.expTime * 1000);
    yield put(actions.logout());
}

export function* authUserSaga(action) {
    put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
    let url = `${BASE_API_URL}/signupNewUser${API_KEY}`;
    if (!action.isSignup) {
        url = `${BASE_API_URL}/verifyPassword${API_KEY}`;
    }

    try{
        const response = yield axios.post(url, authData);

        const expDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expDate', expDate);
        yield localStorage.setItem('userId', response.data.localId);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkoutAuthTimeout(response.data.expiresIn));

    } catch (error) {
        yield put(actions.authFail(error.response.data.error));
    }
}

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    if (!token) {
        put(actions.logout());
    } else {
        const expDate = yield new Date(localStorage.getItem('expDate'));
        if (expDate <= new Date()) {
            put(actions.logout());
        } else {
            const userId = yield localStorage.getItem('userId');
            put(actions.authSuccess(token, userId));
            put(actions.checkoutAuthTimeout((expDate.getTime() - new Date().getTime()) / 1000));
        }

    }
};
