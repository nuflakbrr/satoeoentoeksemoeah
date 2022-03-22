import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { About, Home } from './pages'

function App() {
  const [dark, setDark] = useState()

  return (
    <div className={dark ? '' : 'dark'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App