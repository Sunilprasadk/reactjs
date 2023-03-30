import {useDispatch} from 'react-redux';
import { Button, DatePicker, Form, Input, Select } from 'antd';

const { TextArea } = Input;


  const TaskForm = () => {

    const dispatch = useDispatch();

    function onFinish(values){
      dispatch({
        type: 'SEND',
        payload : values
      });
    }

    return (
      <>
        <Form onFinish={onFinish}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
          label="Task Name"
          name="taskname"
          rules={[
            {
              required: true,
              message: 'Please input your task name!',
            },
          ]}>
            <Input />
          </Form.Item>
          <Form.Item 
          label="Task Comments"
          name="taskcomments"
          rules={[
            {
              required: true,
              message: 'Please input your task comments!',
            },
          ]}>
            <TextArea rows={4}/>
          </Form.Item>
          <Form.Item 
          label="Task Status"
          name="taskstatus"
          rules={[
            {
              required: true,
              message: 'Please choose your task status!',
            },
          ]}>
            <Select>
              <Select.Option value="NOT-STARTED">NOT-STARTED</Select.Option>
              <Select.Option value="IN-PROGRESS">IN-PROGRESS</Select.Option>
              <Select.Option value="COMPLETED">COMPLETED</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item 
          label="Task Due-Date"
          name="taskdue"
          rules={[
            {
              required: true,
              message: 'Please input your task due-date!',
            },
          ]}>
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  };
  export default TaskForm;