import { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import { isValidDiff } from './helpers'

import Minesweeper from './components/Minesweeper'
import Board from './components/Board'

function App() {
  const [validDiff, setValidDiff] = useState(false)

  const navigate = useNavigate()

  const diffSelectedHandler = (diff) => {
    navigate(`/${diff}`)

    isValidDiff(diff) ? setValidDiff(true) : setValidDiff(false)
  }

  return (
    <main className="w-full h-full flex justify-center items-center">
      <Routes>
        <Route path='/' element={<Minesweeper onDiffSelected={diffSelectedHandler} />} />

        <Route path='/:diff' element={validDiff ? <Board /> : <Navigate to='/' />} />
      </Routes>
    </main>
  )
}

export default App