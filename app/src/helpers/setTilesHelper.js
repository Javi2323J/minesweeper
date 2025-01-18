import { easyOffsets, checkNearbyBombs, checkNearbyEmpty } from '../utils'

export default (diff) => {
    let arr = []
    let emptyTiles, bombs, startingPoint

    switch (diff) {
        case 'easy':
            // SETTING THE FULL ARRAY
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    arr.push({ row: i, column: j, type: null, content: null, adjacentEmpty: false })
                }
            }

            // SETTING THE EMPTY TILES
            emptyTiles = Math.floor(Math.random() * 10 + 10)

            while (true) {
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

            // SETTING THE BOMBS
            bombs = Math.floor(Math.random() * 10 + 15)

            do {
                const randomNumber = Math.floor(Math.random() * arr.length)

                const selectedPosition = arr[randomNumber]

                if (!selectedPosition.type) {
                    selectedPosition.type = 'b'
                    selectedPosition.content = '💣'

                    bombs--
                }
            } while (bombs > 0)

            // SETTING THE NUMBERS
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].type !== 'b') {
                    const nearbyBombs = checkNearbyBombs(arr, arr[i])

                    if (nearbyBombs > 0) {
                        arr[i].type = 'n'
                        arr[i].content = nearbyBombs
                    } else arr[i].type = 'e'
                }
            }

            // SETTING ADJACENT PROPERTY
            for (let i = 0; i < arr.length; i++) {
                if (!arr[i].adjacentEmpty) {
                    const adjacentEmpty = checkNearbyEmpty(arr, arr[i])

                    if (adjacentEmpty) arr[i].adjacentEmpty = true
                }
            }
            console.log(arr)
            return arr
    }
}