// src/sagas.ts
import { takeEvery, put } from "redux-saga/effects";
import { setValue } from "../slices/dummySlice";

// Example Saga: Logging action payload and dispatching a new action
function* setValueSaga(action: any) {
  console.log("Saga received:", action.payload);
  yield put(setValue(action.payload)); // Dispatch action to update state
}

// Watcher Saga: Listen for the `setValue` action
function* watchDummySetValue() {
  yield takeEvery("dummy/setValue", setValueSaga);
}

export default watchDummySetValue;
