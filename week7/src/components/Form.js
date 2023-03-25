import { Button, Form, Input } from 'antd';

import {useDispatch} from 'react-redux';


const TaskForm = () => {

  const dispatch = useDispatch();


  let task = {
    name : ''
  }

  function buttonHandler(){
    dispatch({
      type:'TASKADD',
      payload:task.name
    });
  }

  const onFinish = (values) => {
    task.name = values.taskname;
    buttonHandler();
  };
  
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return(
    <>
    <Form
    name="basic"

    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="taskname"
      rules={[
        {
          required: true,
          message: 'What is your task?',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Add Task
      </Button>
    </Form.Item>
  </Form>
  </>
  );
}
export default TaskForm;