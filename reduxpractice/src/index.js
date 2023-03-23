import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {legacy_createStore as createStore} from 'redux';

import { Provider } from 'react-redux';

import counterReducer from './reducers';


const store = createStore(counterReducer);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {store}>
    <App />
  </Provider>
);