import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {legacy_createStore as createStore} from 'redux';

import { Provider } from 'react-redux';

const counterReducer = (state={
  count:0
}, action)=>{
  if(action.type==='INCREMENT'){
    return {
      ...state,
      count : state.count+1
    }
  }
  else if (action.type === 'DECREMENT'){
    return {
      ...state,
      count : state.count-1
    }
  }else{
    return state;
  }
}

export const incrementAction = {
  type: 'INCREMENT'
}

export const decrementAction = {
  type: 'DECREMENT'
}

const store = createStore(counterReducer);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {store}>
    <App />
  </Provider>
);