import { tileOffsets } from './offsets'

export default (arr, myPosition) => {
    let nearbyBombs = 0

    for (let i = 0; i < 8; i++) {
        const { colOffset, rowOffset } = tileOffsets[i]

        const foundBomb = arr.findIndex(tile =>
            tile.column === myPosition.column + colOffset && tile.row === myPosition.row + rowOffset && tile.type === 'b'
        )

        if (foundBomb > 0) nearbyBombs++
    }

    return nearbyBombs
}