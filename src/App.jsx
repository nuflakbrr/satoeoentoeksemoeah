import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { About, Biner, BMI, Cicilan, Decimal, Environment, Gallery, Hexa, Home, NotFound, Oktal, PPN, ShoppingCart } from './pages'

function App() {
  const [dark, setDark] = useState()

  return (
    <div className={dark ? '' : 'dark'}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/bmi' element={<BMI />} />
        <Route path='/credit' element={<Cicilan />} />
        <Route path='/tax' element={<PPN />} />
        <Route path='/convert/biner' element={<Biner />} />
        <Route path='/convert/octal' element={<Oktal />} />
        <Route path='/convert/decimal' element={<Decimal />} />
        <Route path='/convert/hexadecimal' element={<Hexa />} />
        <Route path='/book' element={<Gallery />} />
        <Route path='/environment' element={<Environment />} />
        <Route path='/shopping' element={<ShoppingCart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App