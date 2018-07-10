import React from 'react';
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createMemoryHistory } from 'history'; 
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';

import saga from '@bit/tolicodes.weacro.common.saga';

import Router from './src/Router';
import pose from './src/store/reducers/pose';
import user from './src/store/reducers/user';
import view from './src/store/reducers/view';

const Container = styled.View`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const history = createMemoryHistory();
const reducer = combineReducers({ view, pose, user });
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  connectRouter(history)(reducer),
  {},
  compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
);

sagaMiddleware.run(saga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router/>
        </ConnectedRouter>
      </Provider>
    );
  }
}