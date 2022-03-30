import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { About, Biner, BMI, Cicilan, Decimal, Home, NotFound, Oktal, PPN } from './pages'

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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App