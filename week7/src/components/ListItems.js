import { Tabs, Checkbox, Typography } from 'antd';

import {useSelector, useDispatch} from 'react-redux';



const ListItems = () => {

  let allItems = useSelector((state)=> state);
  let activeItems = useSelector((state)=> state);
  let completeItems = useSelector((state)=> state);

  let dispatch = useDispatch();

  function checkboxHandler(key){
    dispatch({
      type:'TASKCOMPLETE',
      payload:key
    });
  }
      
    
    const items = [
    {
      key: '1',
      label: `ALL`,
      children: allItems.map((item,index)=>{
        if(index===0){
          return
        }
        return <Checkbox key={index} onChange={()=>checkboxHandler(index)}>{item.taskName}</Checkbox>
      }),
    },
    {
      key: '2',
      label: `ACTIVE`,
      children: activeItems.map((item, index)=>{
        if(index===0){
          return
        }

        if(item.taskStatus==='ACTIVE'){
          return <Checkbox key={index} onChange={()=>checkboxHandler(index)}>{item.taskName}</Checkbox>
        }
      }),
    },
    {
      key: '3',
      label: `COMPLETED`,
      children: completeItems.map((item,index)=> {
        if(index===0){
          return
        }

        if(item.taskStatus==='COMPLETED'){
          return <Checkbox key={index} defaultChecked onChange={()=>checkboxHandler(index)}><Typography.Text delete>{item.taskName}</Typography.Text></Checkbox>
        }
      }),
    },
    ];
    
      return(
    <>
      <Tabs defaultActiveKey="1" items={items}/>
    </>
  )
}


export default ListItems;