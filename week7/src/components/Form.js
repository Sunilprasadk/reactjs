import { Button, Form, Input } from 'antd';


const onFinish = (values) => {
  console.log(values.taskname);
};


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const TaskForm = () => (
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
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default TaskForm;