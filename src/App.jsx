import { useState } from 'react'
import Button from './Components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inc=()=>setCount(count=>count+1);
  const dec=()=>setCount(count=>count-1)


  return (
    <>
    <h1>Counter App</h1>
    <p>count: {count}</p>
    <Button onclick={inc} value='Incremet'></Button>
    <Button onclick={dec} value='Decrement'></Button>

    </>
  )
}

export default App
