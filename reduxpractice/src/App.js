import React from 'react';
import { incrementAction } from './index';

import { useSelector, useDispatch } from 'react-redux';

function App() {

  const counter = useSelector(state=>state.count);
  const dispatch = useDispatch();

  function incrementHandler(){
    dispatch(incrementAction);
  }

  return (
    <>
    <h2>Count : {counter}</h2>
    <button onClick={incrementHandler}>+</button>
    </>
  )
}

export default App