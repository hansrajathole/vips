import React from 'react'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Room from './pages/Room'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div className='h-screen w-full bg-blue-100 font-extrabold'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomId' element={<Room/>}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default App
