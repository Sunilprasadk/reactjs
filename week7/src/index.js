import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import reducers from './store/reducers';

import {legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';

//store
const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);