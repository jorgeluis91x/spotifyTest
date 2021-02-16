import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import sagas from './sagas';

//let store;

function configureStore() {
  const IS_PRODUCTION = false;
  const sagaMiddlare = createSagaMiddleware();

  const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  let middleware = applyMiddleware(sagaMiddlare);

  // config devtools
  if (!IS_PRODUCTION) {
    // @ts-ignore
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
  const store = createStore(persistedReducer, middleware);
  const persistor = persistStore(store);

  // hot replacement
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(persistReducer(rootPersistConfig, nextRootReducer));
    });
  }

  sagaMiddlare.run(sagas);

  return {
    store,
    persistor,
  };
}
export default configureStore;
//export { store, configureStore as default };
