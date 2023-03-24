import {useState, useEffect} from 'react'

function App() {

  const [name, setName] = useState('');

  function showHandler(){
    setName("Sunilprasad Kuppusamy");
  }

  function hideHandler(){
    setName("");
  }

  useEffect(()=>{
    console.log("Changed !")
  },[name]);


  return (
    <>
    <h2>Hello, I am {name}</h2>
    <button onClick={showHandler}>Show</button>
    <button onClick={hideHandler}>Hide</button>
    </>
  );
}

export default App;
