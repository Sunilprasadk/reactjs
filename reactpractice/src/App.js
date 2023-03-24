import {useState} from 'react';

function App() {

  const [data, setData] = useState([]);

  function buttonHandler(){
    setData([...data, "Sunil"]);
  }

  return (
    <div className="App">
      <h2>Hello !</h2>
      {data.map((ele, indx)=>{
        return <i key={indx}>{ele}</i>})
      }
      <button onClick={buttonHandler}>Add Me</button>
    </div>
  );
}

export default App;