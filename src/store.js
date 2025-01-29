

import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { configureStore } from "@reduxjs/toolkit";
import sampleData from "./sampleData";
import { reducer } from "./reducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const rootReducer = combineReducers({
  seedData: reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: { sampleData },
});

export const persistedStore = persistStore(store);
