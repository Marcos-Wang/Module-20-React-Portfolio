import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <Body />
    </>
  )
}

export default App
