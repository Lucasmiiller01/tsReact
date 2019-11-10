import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadFailure, loadSuccess } from "./actions";


export function* load() {
    try {
        const { data } = yield call(api.get, "users/diego3g/repos");
        yield put(loadSuccess(data));
    } catch (error) {
        yield put(loadFailure());

    }

}