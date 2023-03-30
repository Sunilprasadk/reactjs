import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Row, Col, Button, Modal} from 'antd';
import TaskForm from './components/FormData';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
