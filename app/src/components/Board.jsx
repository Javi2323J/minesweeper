import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { setTilesHelper } from '../helpers'

import Tile from './Tile'

function Board(props) {
    const [tiles, setTiles] = useState([])
    const [bombed, setBombed] = useState(false)
    const [bombs, setBombs] = useState(0)
    const [emptiesRevealed, setEmptiesRevealed] = useState(false)

    const { diff } = useParams()

    const handleBombClick = () => {
        setBombed(true)
    }

    const handleEmptyClick = () => {
        setEmptiesRevealed(true)
    }

    const handleMarkedTile = (marked) => {
        if (marked) setBombs(bombs - 1)
        else setBombs(bombs + 1)
    }

    useEffect(() => {
        if (tiles.length === 0) {
            switch (diff) {
                case 'easy':
                    const newTiles = setTilesHelper('easy')
                    setBombs(newTiles.filter(tile => tile.type === 'b').length)
                    setTiles(newTiles)
                    break
                case 'medium':
                    setTiles(new Array(810))
                    break
                case 'hard':
                    setTiles(new Array(8100))
                    break
            }
        }
    }, [tiles])

    return (
        <section>
            <div className="bg-[white] font-bold flex justify-center items-center pt-[8px]">MINESWEEPER {bombs}</div>
            {diff === 'easy' &&
                <div className="grid grid-cols-9 border-[white] border-[8px]">
                    {tiles.map((item, index) => <Tile key={index}
                        item={item}
                        onBombClicked={handleBombClick}
                        bombed={bombed}
                        onEmptyRevealed={handleEmptyClick}
                        emptiesRevealed={emptiesRevealed}
                        onMarkedTile={handleMarkedTile}
                    />)}
                </div>
            }
        </section>
    )
}

export default Board