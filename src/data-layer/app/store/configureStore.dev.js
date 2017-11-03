// @flow

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import rootReducer from "data-layer/app/rootReducer";
// import type { Store } from "redux";
// import type { State as StoreState, Action } from "ducks";

const middleware = applyMiddleware(thunk, apiMiddleware);

const devTools = window.devToolsExtension ?
  window.devToolsExtension() : f => f;

export default (initialState: any): Store<StoreState, Action> => createStore(
  rootReducer,
  initialState,
  compose(middleware, devTools)
);
