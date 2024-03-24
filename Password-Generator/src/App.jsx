import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef HOOK
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789";
    }
    if(charAllowed){
      str += "!@#$%&*";
    }
    for(let i= 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  } , [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenerator() } , 
    [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-700' >
        <h1 className='text-center text-white text-lg my-3'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
        <input 
          type='text'
          value={password}
          placeholder= "Password"
          readOnly
          className='outline-none w-full py-4 px-6'
          ref={passwordRef} //Password Reference Hook useRef
        />
        <button 
          onClick={copyPasswordToClipboard}
          className="bg-indigo-500 opacity-70 hover:opacity-100 text-white outline-none shrink-0 px-3 py-0.5">
          Copy
        </button>

        </div>

        <div className='flex gap-x-2 text-sm '>
            <div className='flex gap-x-1 items-center'>
                <input
                  type="range"
                  min={8}
                  max={32}
                  value={ length }
                  className='cursor-pointer'
                  onChange={ (e) => {
                    setLength(e.target.value)
                  }}
                />
                    <label className='text-white'>Length: {length} </label>
            </div>
            {/*  */}
                <div className='flex items-center gap-x-1'>
                  <input 
                    type='checkbox'
                    defaultChecked={numberAllowed}
                    id='numberInput'
                    className='cursor-pointer'
                    onClick={ () => {
                      setNumberAllowed((prev) => !prev )
                    }}
                  />
                  <label className='text-white'>Numbers</label>
                </div>

                <div className='flex items gap-x-1'>
                    <input 
                      type='checkbox'
                      defaultChecked={charAllowed}
                      className='cursor-pointer'
                      onClick={ () => {
                        setCharAllowed((prev) => !prev)
                      }}
                    />
                    <label className='text-white flex'>Special Character</label>
                </div>
            {/*  */}
        </div>
        </div>
    
    </>
  )
}

export default App
