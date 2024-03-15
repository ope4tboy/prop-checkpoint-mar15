import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ServicePage from './pages/ServicePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import Homepage from './pages/Homepage'
import Foot from './components/Foot'





const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='product' element={<ProductPage/>}/>
        <Route path='service' element={<ServicePage/>}/>
        <Route path='foot' element={<Foot/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App