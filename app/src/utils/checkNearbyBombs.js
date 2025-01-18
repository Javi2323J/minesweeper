import { tileOffsets } from './offsets'

export default (arr, myPosition) => {
    let nearbyBombs = 0

    for (let i = 0; i < 8; i++) {
        const { colOffset, rowOffset } = tileOffsets[i]

        const found = arr.findIndex(tile =>
            tile.column === myPosition.column + colOffset && tile.row === myPosition.row + rowOffset && tile.type === 'b'
        )
        console.log(found)

        if (found > 0) nearbyBombs++
    }

    return nearbyBombs
}