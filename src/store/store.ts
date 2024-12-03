import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage
import { dummyReducer } from "./slices/dummySlice"; // Import the dummy reducer
import rootSaga from "./sagas"; // Import your rootSaga

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers (note that this is implicit in configureStore)
const rootReducer = combineReducers({
  dummy: dummyReducer,
});
// Persisting the reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Disable thunk as per your requirement
    }).concat(sagaMiddleware),
});

// Persistor
const persistor = persistStore(store);

// Run the root saga
sagaMiddleware.run(rootSaga);

export { store, persistor };
