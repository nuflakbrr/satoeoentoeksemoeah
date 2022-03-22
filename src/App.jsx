import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { About, BMI, Home, NotFound } from './pages'

function App() {
  const [dark, setDark] = useState()

  return (
    <div className={dark ? '' : 'dark'}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/bmi' element={<BMI />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App