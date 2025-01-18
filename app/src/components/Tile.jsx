import { useState } from 'react'

function Tile(props) {
    const { item: { type, content } } = props
    const [revealed, setRevealed] = useState(false)

    const handleTileClicked = (_) => {
        setRevealed(true)
    }

    return <button onClick={handleTileClicked} className={`w-[28px] h-[28px] ${revealed ? 'bg-[#384048]' : 'bg-[#4C545C]'} border-2 border-t-[#6F7880] border-l-[#6F7880] border-r-[#293139] border-b-[#293139] cursor-auto`}>
        {revealed && content}
    </button>
}

export default Tile