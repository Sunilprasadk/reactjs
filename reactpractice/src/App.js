import {useState} from 'react';

import {Divider, List, Typography, Button, Space} from 'antd';

function App() {

  const [data, setData] = useState([]);

  function buttonHandler(){
    setData([...data, "Sunil"]);
  }

  return (
    <div>
      <Space direction='vertical'>
      <Divider orientation="left">Hello, I am the List Holder !</Divider>
      <List bordered dataSource={data} 
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
      <Button type='primary' onClick={buttonHandler}>Add Me</Button>
      </Space>
    </div>
  );
}

export default App;