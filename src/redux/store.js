import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: [
//     'auth',
//   ]
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, logger)
)

// let persistor = persistStore(store)

export default store;