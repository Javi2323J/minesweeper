import { useState, useEffect } from 'react'

import { setTilesHelper } from '../helpers'

import Tile from './Tile'

function Board(props) {
    const [tiles, setTiles] = useState([])

    const { diff } = props

    useEffect(() => {
        if (tiles.length === 0)
            switch (diff) {
                case 'easy':
                    const newTiles = setTilesHelper('easy')
                    setTiles(newTiles)
                    break
                case 'medium':
                    setTiles(new Array(810))
                    break
                case 'hard':
                    setTiles(new Array(8100))
                    break
            }
    }, [tiles])

    return (
        <section>
            <div className="bg-[white] font-bold flex justify-center items-center pt-[8px]">MINESWEEPER</div>
            {diff === 'easy' &&
                <div className="grid grid-cols-9 border-[white] border-[8px]">
                    {tiles.map((item, index) => <Tile key={index} type={item.type} />)}
                </div>
            }
        </section>
    )
}

export default Board