import { useState, useEffect } from 'react'

function Tile(props) {
    const {
        item: { type, content, adjacentEmpty },
        bombed,
        onBombClicked,
        onEmptyRevealed,
        emptiesRevealed,
        onMarkedTile,
        onRevealedTile,
        onCorrectlyMarked,
        win
    } = props

    const [revealed, setRevealed] = useState(false)
    const [marked, setMarked] = useState(false)

    useEffect(() => {
        if (type === 'e' || adjacentEmpty) {
            setRevealed(emptiesRevealed)
        }
    }, [emptiesRevealed])

    const handleTileClicked = (event) => {
        event.preventDefault()

        if (!bombed && !win) {
            if (event.button === 0 && !marked && !revealed) {
                if (type === 'b') {
                    onBombClicked()
                } else if (type === 'e') {
                    onEmptyRevealed()
                }
                else if (type !== 'b') {
                    onRevealedTile()
                }
                setRevealed(true)
            } else if (event.button === 2 && !revealed) {
                onMarkedTile(!marked)

                if (type === 'b' && !marked) onCorrectlyMarked('plus')
                else if (type === 'b' && marked) onCorrectlyMarked('minus')

                marked ? setMarked(false) : setMarked(true)

            }
        }
    }

    return <button onContextMenu={handleTileClicked} onClick={handleTileClicked} className={`w-[28px] h-[28px] ${revealed ? 'bg-[#384048]' : 'bg-[#4C545C]'} border-2 border-t-[#6F7880] border-l-[#6F7880] border-r-[#293139] border-b-[#293139] cursor-auto flex items-center justify-center text-center text-[1.25rem]`}>
        {revealed && content}
        {marked && '🚩'}
    </button>
}

export default Tile