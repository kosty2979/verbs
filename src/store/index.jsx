import {applyMiddleware, compose, createStore} from "redux";
import logger from "redux-logger";
import reducers from "../reducers";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger),
);

const Store = createStore(reducers, enhancer);

export default Store