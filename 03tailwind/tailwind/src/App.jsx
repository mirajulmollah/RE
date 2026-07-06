import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card username="Mirajul" btntxt="Click me!" />
     <Card username="RAktim" btntxt="Press Me" />
     <Card />
    </>
  )
}

export default App
