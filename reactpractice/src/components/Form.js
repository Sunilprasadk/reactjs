import { Button, Form, Input, message, Space } from 'antd';


const FormComponent = (props) => {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    props.onClick(values.link);
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };


  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="link"
        label="URL"
        rules={[
          {
            required: true,
          },
          {
            type: 'url',
            warningOnly: true,
          },
          {
            type: 'string',
            min: 6,
          },
        ]}
      >
        <Input placeholder="Enter your url here" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default FormComponent;