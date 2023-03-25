import TaskForm from './components/Form';
import { useSelector,useDispatch } from 'react-redux';
import { Checkbox} from 'antd';


function App() {

  //error
  const task = useSelector((state)=>{
    return state
  });

  let dispatch = useDispatch();

  function checkboxHandler(key){
    dispatch({
      type:'TASKCOMPLETE',
      payload:key
    });
  }

  return (
    <>
    <TaskForm />
    {task.map((item,index)=>{
      return <Checkbox key={index} onChange={()=>checkboxHandler(index)}>{`${item.taskName}`}</Checkbox>;})
    }
    </>
  );
}

export default App;
