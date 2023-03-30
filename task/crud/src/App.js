import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Row, Col, Button, Modal} from 'antd';
import TaskForm from './components/FormData';

function App() {
  //to make model open close
  const [isModalOpen, setIsModalOpen] = useState(false);

  //show model
  const showModal = () => {
    setIsModalOpen(true);
  };

  //modal ok
  const handleOk = () => {
    setIsModalOpen(false);
  };

  //modal cancel
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  //it gives the whole state(data)
  const data = useSelector(state=>{
    console.log(state)
  });
  return (
    <>
    <Row align="top" justify="center">
      <Col span={4}>Task List</Col>
      <Col span={4} offset={8}><Button onClick={showModal} type="primary">Add</Button></Col>
    </Row>
    <Modal title="Task Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <TaskForm/>
    </Modal>
    </>
  );
}

export default App;
