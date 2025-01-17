import { useState } from 'react'

import Board from './components/Board'

function App() {
  const [diff, setDiff] = useState(null)

  const handleDiffSelected = (event) => {
    const { id } = event.target

    setDiff(id)
  }

  return (
    <main className="w-full h-full flex justify-center items-center">
      {!diff ?
        <div className="flex gap-[40px] font-bold flex-col items-center justify-center">
          <p className="text-[#F8F8FF] ">Choose difficulty</p>

          <div className="flex gap-[10px]">
            <button id="easy" onClick={handleDiffSelected} className="w-[110px] border-[#D3D3D3] bg-[#F8F8FF] border-2 rounded-[2px] hover:bg-[#D3D3D3]">Easy</button>
            <button id="medium" onClick={handleDiffSelected} className="w-[110px] border-[#D3D3D3] bg-[#F8F8FF] border-2 rounded-[2px] hover:bg-[#D3D3D3]">Medium</button>
            <button id="hard" onClick={handleDiffSelected} className="w-[110px] border-[#D3D3D3] bg-[#F8F8FF] border-2 rounded-[2px] hover:bg-[#D3D3D3]">Hard</button>
          </div>
        </div> :
        <div>
          <Board diff={diff} />
        </div>
      }
    </main>
  )
}

export default App