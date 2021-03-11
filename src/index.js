import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from '../src/store/reducer';
import {ActionCreator} from '../src/store/action';

const store = createStore(reducer);
store.dispatch(ActionCreator.changeList());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
