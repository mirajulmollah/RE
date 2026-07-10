import { useCallback, useEffect, useState } from 'react'


function App() {
  const[length,setlength]=useState(8)
  const[numallowed,setnumallowed]=useState(false)
  const[charallowed,setcharallowed]=useState(false)
  const[password,setpassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed){
      str+="0123456789"

    }
    if(charallowed) str+="!@#$%^&*()"
    for(let i=1;i<=length;i++){
      let char=(Math.floor(Math.random() * str.length))
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length,numallowed,charallowed])

  useEffect(()=>{
    passwordGenerator()
  },[length,numallowed,charallowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md h-24 mx-auto shadow-md rounded-lg px-4 my-4 text-orange-500  bg-gray-700">
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
      <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder="password"
        readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 srink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
          </div>
          <label>Length:{length}</label>
          
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numallowed}
            id="numberInput"
            onChange={()=>{
              setnumallowed((prev)=>!prev);
            }}
            />
          </div>
          <label>Numbers</label>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={charallowed}
            id="CharacterInput"
            onChange={()=>{
              setcharallowed((prev)=>!prev);
            }}
            />
          </div>
          <label>Character</label>
          


        </div>

      </div>
    </>
  )
}

export default App