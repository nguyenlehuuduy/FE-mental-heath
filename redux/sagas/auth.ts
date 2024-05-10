import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";
import { getCurrentUser, getCurrentUserSuccess } from "../actions/auth";
import { MyselfForCard } from "@/service/accountService";

function* handleGetCurrentUser(action: PayloadAction<MyselfForCard>) {
  yield put(getCurrentUserSuccess(action.payload));
}

export default function* auth() {
  yield takeEvery(getCurrentUser.type, handleGetCurrentUser);
}
