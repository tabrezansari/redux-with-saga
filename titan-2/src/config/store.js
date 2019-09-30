import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducer";
import rootSaga from "./Saga";

/**
 * initial State for store and enhancer for reducers
 */
const initialState = {};
const enhancers = [];

/**
 * React & Redux DevTool Setup only for development enviroment
 * @required ReactRedux DevTool installed in chrome
 */
if (process.env.NODE_ENV === "development") {
  const devToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer(), initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
