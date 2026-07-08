import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const[length,setlength]=useState(8)
  const[numallowed,setnumallowed]=useState(false)
  const[charallowed,setcharallowed]=useState(false)
  const[passwrd,setpasswrd]=useState(" ")
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed){
      str+="0123456789"

    }
    if(charallowed) str+="!@#$%^&*()"
    for(i==1;i<=length;i++){
      let char=(Math.floor(Math.random() * str.length)) +1
      pass+=str.charAt(char)
    }
    setpasswrd(pass)
  },[length,numallowed,charallowed])


  return (
    <>
      <h1 className='text-4xl text-center text-white mt-8'>Password Generator</h1>
    </>
  )
}

export default App