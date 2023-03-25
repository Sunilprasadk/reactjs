import { Button, Form, Input, Row, Col } from 'antd';

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

    <Row justify='center'>
    <Col span={14} offset={2}>
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
    </Col>

    <Col span={4}>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Add Task
      </Button>
    </Form.Item>
    </Col>
    </Row>
  </Form>
  </>
  );
}
export default TaskForm;