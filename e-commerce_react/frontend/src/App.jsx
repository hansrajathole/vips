import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import AddProducts from "./Pages/AddProducts"
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/products/add' element={<AddProducts/>}/>
        <Route path='/products/detail/:productId'  element={<ProductDetail/>}/>
      </Routes>

    </div>


  )
}

export default App
