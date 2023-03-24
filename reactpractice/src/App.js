import {useState} from 'react';
import FormComponent from './components/Form';

import {Divider, List, Typography, Space} from 'antd';

function App() {

  const [data, setData] = useState([]);

  function buttonHandler(value){
    setData([...data, value]);
  }

  return (
    <div>
      <FormComponent onClick = {buttonHandler}/>


      <Space direction='vertical'>
      <Divider orientation="left">Hello, I am the List Holder !</Divider>
      <List bordered dataSource={data} 
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
      </Space>
    </div>
  );
}

export default App;