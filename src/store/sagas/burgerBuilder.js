import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-order';

export function* initIngredientSaga(action) {
    try {
        const response = yield axios.get('https://burger-order-2ffee.firebaseio.com/ingredients.json')
        yield put(actions.setIngredients(response.data));
    } catch (error) {
        yield put(actions.fetchIngredientsFailed());
    }
}