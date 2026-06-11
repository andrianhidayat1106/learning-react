import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [angka,setAngka] = useState(0)
  const tambahAngka =()=> {
    setAngka(angka + 1)
  }
  return (
    <div>
     <p>Total Klik: {angka}</p>

     <button onClick={tambahAngka} > Klik</button>
    </div>
  )
}

export default App
