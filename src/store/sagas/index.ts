import { all } from "redux-saga/effects";
import watchDummySetValue from "./dummysaga";

export default function* rootSaga() {
  yield all([watchDummySetValue()]);
}
