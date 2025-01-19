import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { setTilesHelper } from '../helpers'

import Tile from './Tile'

function Board() {
    const [tiles, setTiles] = useState([])
    const [bombed, setBombed] = useState(false)
    const [bombs, setBombs] = useState(0)
    const [initialBombs, setInitialBombs] = useState(0)
    const [toBeRevealed, setToBeRevealed] = useState(0)
    const [emptiesRevealed, setEmptiesRevealed] = useState(false)
    const [emptyOrAdjacentTiles, setEmptyOrAdjacentTiles] = useState()
    const [correctlyMarked, setCorrectlyMarked] = useState(0)
    const [win, setWin] = useState(false)

    const { diff } = useParams()

    const handleRevealedTile = () => {
        const newValue = toBeRevealed - 1
        setToBeRevealed(newValue)
        console.log(toBeRevealed) // TODO
    }

    const handleBombClick = () => {
        setBombed(true)
    }

    const handleEmptyClick = () => {
        setEmptiesRevealed(true)

        const newValue = toBeRevealed - emptyOrAdjacentTiles

        setToBeRevealed(newValue)
    }

    const handleMarkedTile = (marked) => {
        if (marked) setBombs(bombs - 1)
        else setBombs(bombs + 1)
    }

    const handleCorrectlyMarked = (action) => {
        let newValue
        if (action === 'plus') {
            newValue = correctlyMarked + 1
        } else {
            newValue = correctlyMarked - 1
        }
        setCorrectlyMarked(newValue)

    }
    console.log(correctlyMarked)

    const handlePlayAgain = () => {
        setTiles([])
        setBombed(false)
        setBombs(0)
        setInitialBombs(0)
        setToBeRevealed(0)
        setEmptiesRevealed(false)
        setEmptyOrAdjacentTiles()
        setCorrectlyMarked(0)
        setWin(false)
    }

    useEffect(() => {
        if (tiles.length === 0) {
            switch (diff) {
                case 'easy':
                    const newTiles = setTilesHelper('easy')

                    const bombAmount = newTiles.filter(tile => tile.type === 'b').length
                    setBombs(bombAmount)
                    setInitialBombs(bombAmount)
                    setToBeRevealed(newTiles.length - bombAmount)
                    const emptyorAdjacentAmount = newTiles.filter(tile => tile.adjacentEmpty === true || tile.type === 'e')
                    setEmptyOrAdjacentTiles(emptyorAdjacentAmount.length)
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

        if (tiles.length > 0 && correctlyMarked === initialBombs && toBeRevealed <= 1) {
            setWin(true)
        }
    }, [tiles, toBeRevealed, correctlyMarked])

    return (
        <>
            {tiles.length > 0 ?
                <div className="h-screen w-screen flex justify-center items-center">
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
                                    onRevealedTile={handleRevealedTile}
                                    onCorrectlyMarked={handleCorrectlyMarked}
                                    win={win}
                                />)}
                            </div>}
                    </section>
                    {(bombed || win) && <div className="absolute mt-[23rem]">
                        <button onClick={handlePlayAgain} className="bg-[#D3D3D3] px-[.25rem] py-[.125rem] rounded-[2.5px] border-2 border-black">Play Again</button>
                    </div>}
                    {win && <div className="absolute mb-[23rem]">
                        <h1 className="bg-[#D3D3D3] px-[.75rem] py-[.25rem] rounded-[2px] font-bold text-[1.25rem]">YOU WON!</h1>
                    </div>}
                </div> :
                <div>LOADING...</div>}
        </>
    )
}

export default Board