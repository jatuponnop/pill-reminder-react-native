import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pillsReducer from "./pills";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = getDefaultMiddleware({
  serializableCheck: false
})

const reducers = combineReducers({
  pills: pillsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware
});


export const persistor = persistStore(store)
