import React from 'react';
import { decrementAction, incrementAction } from './index';

import { useSelector, useDispatch } from 'react-redux';

function App() {

  const counter = useSelector(state=>state.count);
  const dispatch = useDispatch();

  function incrementHandler(){
    dispatch(incrementAction);
  }

  function decrementHandler(){
    dispatch(decrementAction);
  }

  return (
    <>
    <h2>Count : {counter}</h2>
    <button onClick={incrementHandler}>+</button>
    <button onClick={decrementHandler}>-</button>
    </>
  )
}

export default App