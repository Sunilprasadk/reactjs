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
    if(name===''){
      localStorage.setItem(1, "Sunilprasad !");
    }else{
      console.log(localStorage.getItem(1));
    }
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
