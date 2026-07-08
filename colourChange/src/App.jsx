import { useCallback, useState } from 'react'


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


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-4 text-orange-500  bg-gray-700">
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
      <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder="password"
        readOnly />

      </div>
      </div>
    </>
  )
}

export default App