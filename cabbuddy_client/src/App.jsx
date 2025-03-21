import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import "./components/css/costom_style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      

     

      <Footer/>
    </>
  )
}

export default App
