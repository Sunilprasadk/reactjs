import React from 'react';
import {Button, Space} from 'antd'

import { decrementAction, incrementAction } from './actions';

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
    <Space>
    <Button type="primary" onClick={incrementHandler}>+</Button>
    <Button type='primary' onClick={decrementHandler}>-</Button>
    </Space>
    </>
  )
}

export default App