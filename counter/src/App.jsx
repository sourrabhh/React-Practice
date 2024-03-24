import { useState } from 'react'
import './App.css'
// import Cards from './components/Cards';
import Bgcolor from './components/Bgcolor';

function App() {
let [counter, setCounter] = useState(10);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }

  const decreaseValue = () => {
    if(counter >= 1 ){
      counter = counter - 1;
      setCounter(counter);
    }
  }

  return (
    <>
     {/* <h1 className='bg-green-400 text-black p-2 rounded-lg'>Counter Tailwind </h1>
     <h3>Counter : {counter}</h3>

     <button className='mb-4'
      onClick={addValue}>
      Increase Value</button>
     
     <br />
     <button className='mb-4' 
      onClick={decreaseValue}>
        Decrease Value</button> */}

    {/* <Cards username = "Sourabh" btnName = "Visit Me"/>
    <Cards username = "Vishal" btnName = "Visit Me" /> */}
       
    <Bgcolor />

    </>
  )
}

export default App
