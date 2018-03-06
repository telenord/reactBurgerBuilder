import { takeEvery , all, takeLatest} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, checkoutAuthTimeoutSaga, authUserSaga, authCheckStateSaga} from './auth';
import {fetchOrdersSaga, purchaseBurgerSaga} from './order';
import {initIngredientSaga} from "./burgerBuilder";

export function* watchAuth() {
    yield all([
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkoutAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
]);
}

export function* watchOrder() {
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.FETCH_INGREDIENTS, initIngredientSaga);
}