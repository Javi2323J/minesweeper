import { easyOffsets } from '../utils'

export default (diff) => {
    let arr = []
    let possiblePosition = false
    let emptyTiles, bombs, startingPoint

    switch (diff) {
        case 'easy':
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    arr.push({ row: i, column: j, type: null })
                }
            }
            console.log(arr)

            emptyTiles = Math.floor(Math.random() * 10 + 10)

            while (!possiblePosition) {
                const randomNumber = Math.floor(Math.random() * arr.length)
                const maybePosition = arr[randomNumber]

                if (maybePosition.column > 2 && maybePosition.column < 6 && maybePosition.row > 2 && maybePosition.row < 6) {
                    arr[randomNumber].type = 'e'
                    emptyTiles--
                    startingPoint = arr[randomNumber]
                    break
                }
            }

            for (let i = 0; i < emptyTiles; i++) {
                const { colOffset, rowOffset } = easyOffsets[i]

                const willBeEmpty = arr.find(tile =>
                    tile.column === startingPoint.column + colOffset && tile.row === startingPoint.row + rowOffset)

                willBeEmpty.type = 'e'
            }

            bombs = Math.floor(Math.random() * 10 + 5)

            return arr
    }
}