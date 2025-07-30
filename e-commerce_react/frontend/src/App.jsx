import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import AddProducts from "./Pages/AddProducts"
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
import UserHome from './Pages/usersPage/UserHome'
import UserProductDetail from './Pages/usersPage/UserProductDetail'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<UserHome/>}/>
        <Route path='/products/detail/:productId' element={<UserProductDetail/>}/>
 
        <Route  path='/admin/' element={<Home/>}/>
        <Route  path='/admin/products/add' element={<AddProducts/>}/>
        <Route  path='/admin/products/detail/:productId'  element={<ProductDetail/>}/>
      </Routes> 


    </div>


  )
}

export default App
