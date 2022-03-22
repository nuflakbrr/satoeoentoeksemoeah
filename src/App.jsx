import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { About, BMI, Home } from './pages'

function App() {
  const [dark, setDark] = useState()

  return (
    <div className={dark ? '' : 'dark'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
    </div>
  )
}

export default App