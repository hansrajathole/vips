import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import AddProducts from './components/AddProducts/AddProducts'
import AppRouter from './router/AppRouter'
const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App
